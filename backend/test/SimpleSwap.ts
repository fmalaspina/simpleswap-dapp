import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { SimpleSwap, Token } from "../typechain-types";

const DEADLINE = Math.floor(Date.now() / 1000) + 3_600;
const GAS_OPTS = { gasLimit: 8_000_000n }; 

function pairKey(a: string, b: string) {
  const [t0, t1] = a.toLowerCase() < b.toLowerCase() ? [a, b] : [b, a];
  return ethers.solidityPackedKeccak256(["address", "address"], [t0, t1]);
}

describe("SimpleSwap · core flows", () => {
  let owner: Signer, alice: Signer, bob: Signer;
  let tokenA: Token, tokenB: Token, tokenC: Token;
  let swap:   SimpleSwap;
  let keyAB:  string;

 
  before(async () => {
    [owner, alice, bob] = await ethers.getSigners();

    const TokenF = await ethers.getContractFactory("Token");

    tokenA = (await TokenF.deploy("Token-A", "TKA", GAS_OPTS)) as Token;
    tokenB = (await TokenF.deploy("Token-B", "TKB", GAS_OPTS)) as Token;
    tokenC = (await TokenF.deploy("Token-C", "TKC", GAS_OPTS)) as Token;

    /* mint 1 000 000 eth a owner y 20 000 eth a cada user */
    const million = ethers.parseEther("1000000");
    await tokenA.mint(await owner.getAddress(), million, GAS_OPTS);
    await tokenB.mint(await owner.getAddress(), million, GAS_OPTS);

    const twentyK = ethers.parseEther("20000");
    for (const tkn of [tokenA, tokenB]) {
      await tkn.mint(await alice.getAddress(), twentyK, GAS_OPTS);
      await tkn.mint(await bob.getAddress(), twentyK, GAS_OPTS);
    }

    const SwapF = await ethers.getContractFactory("SimpleSwap");
    swap = (await SwapF.deploy(GAS_OPTS)) as SimpleSwap;

    keyAB = pairKey(tokenA.target as string, tokenB.target as string);
  });

  /* ───────── addLiquidity bootstrap ───────── */

  it("Owner crea el pool y recibe LP", async () => {
    const amt = ethers.parseEther("1000");

    await tokenA.approve(swap, amt, GAS_OPTS);
    await tokenB.approve(swap, amt, GAS_OPTS);

    const totalBefore = await swap.totalSupply();

    const tx = await swap.addLiquidity(
      tokenA.target,
      tokenB.target,
      amt,
      amt,
      0,
      0,
      await owner.getAddress(),
      DEADLINE,
      GAS_OPTS,
    );
    await tx.wait();

    const totalAfter = await swap.totalSupply();
    expect(totalAfter - totalBefore).to.equal(amt); // √(x·y)=1000

    const pool = await swap.pools(keyAB);
    expect(pool.reserveA).to.equal(amt);
    expect(pool.reserveB).to.equal(amt);
  });
/* ───────── segundo proveedor ───────── */
it("Alice agrega liquidez manteniendo ratio", async () => {
  const amt = ethers.parseEther("100");
  await tokenA.connect(alice).approve(swap, amt, GAS_OPTS);
  await tokenB.connect(alice).approve(swap, amt, GAS_OPTS);
  const preview = await swap
    .connect(alice)
    .addLiquidity.staticCall(  
      tokenA.target,
      tokenB.target,
      amt,
      amt,
      0,
      0,
      await alice.getAddress(),
      DEADLINE,
      GAS_OPTS,
    );

  const minted = preview[2]; 
  expect(minted).to.equal(amt);

  /* 2. envía la tx real */
  await swap
    .connect(alice)
    .addLiquidity(
      tokenA.target,
      tokenB.target,
      amt,
      amt,
      0,
      0,
      await alice.getAddress(),
      DEADLINE,
      GAS_OPTS,
    );
});

  /* ───────── getAmountOut ───────── */

  it("getAmountOut respeta x·y=k", async () => {
    const out = await swap.getAmountOut(
      ethers.parseEther("10"),
      ethers.parseEther("1100"),
      ethers.parseEther("1100"),
    );
    const exp =
      (ethers.parseEther("10") * ethers.parseEther("1100")) /
      ethers.parseEther("1110");
    expect(out).to.equal(exp);
  });

  /* ───────── swapExactTokensForTokens ───────── */

  it("Bob intercambia TKA por TKB", async () => {
    const amountIn = ethers.parseEther("10");
    await tokenA.connect(bob).approve(swap, amountIn, GAS_OPTS);

    const pool0 = await swap.pools(keyAB);

    const tx = await swap
      .connect(bob)
      .swapExactTokensForTokens(
        amountIn,
        0,
        [tokenA.target, tokenB.target],
        await bob.getAddress(),
        DEADLINE,
        GAS_OPTS,
      );
    await tx.wait();

    const pool1 = await swap.pools(keyAB);
    // k = (reserveA+ΔA)·(reserveB-ΔB)  ;  comprobamos que reserveB decrementó
    expect(pool1.reserveB).to.be.lt(pool0.reserveB);
  });

  /* ───────── removeLiquidity ───────── */

  it("Owner quema parte de su LP y recibe tokens", async () => {
    const lp0   = await swap.balanceOf(await owner.getAddress());
    const burn  = lp0 / 3n;

    await swap.removeLiquidity(
      tokenA.target,
      tokenB.target,
      burn,
      0,
      0,
      await owner.getAddress(),
      DEADLINE,
      GAS_OPTS,
    );

    const lp1 = await swap.balanceOf(await owner.getAddress());
    expect(lp1).to.equal(lp0 - burn);
  });

  /* ───────── reverts esperados ───────── */

  it("Rechaza swap si el pool no existe", async () => {
    // Par [TKC, TKA] aún no tiene liquidez
    await expect(
      swap.swapExactTokensForTokens(
        1,
        0,
        [tokenC.target, tokenA.target],
        await bob.getAddress(),
        DEADLINE,
        GAS_OPTS,
      ),
    ).to.be.revertedWith("Pool empty");
  });

  it("Rechaza addLiquidity con deadline vencido", async () => {
    await expect(
      swap.addLiquidity(
        tokenA.target,
        tokenB.target,
        1,
        1,
        0,
        0,
        await owner.getAddress(),
        1,
        GAS_OPTS,
      ),
    ).to.be.revertedWith("Expired");
  });
});
