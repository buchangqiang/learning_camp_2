const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Deposit", function () {
    let deposit
    let owner
    let account1
    async function init() {
        const Deposit = await ethers.getContractFactory("Deposit")
        deposit = await Deposit.deploy()
        await deposit.deployed()

    }
    before(async function () {
        await init()
    })

    beforeEach(async function () {
        //默认10000 000000000000000000
        [owner, account1] = await ethers.getSigners()
    })

    it("deposit test", async function () {

        // a1= await account1.getBalance()
        // console.log("a1 balance:",ethers.utils.formatEther(a1))

        //存储前
        a1_b = await deposit.userBalance(account1.address)
        console.log("a1 value:", ethers.utils.formatEther(a1_b))
        expect(ethers.utils.formatEther(a1_b)).to.equal("0.0")

        //account1存钱
        tx = await deposit.connect(account1).deposit({ value: ethers.utils.parseEther("1") })
        await tx.wait()
        //查看余额
        // a1_new= await account1.getBalance()
        // console.log("a1_new balance:",ethers.utils.formatEther(a1_new))

        // contract_new=await ethers.provider.getBalance(deposit.address)
        // console.log("contract balance:",ethers.utils.formatEther(contract_new))
        // expect(ethers.utils.formatEther(contract_new)).to.equal("1.0")

        // 存储 1 ETH 后
        a1_b_new = await deposit.userBalance(account1.address)
        console.log("a1 value:", ethers.utils.formatEther(a1_b_new))
        expect(ethers.utils.formatEther(a1_b_new)).to.equal("1.0")
    })

    it("withdraw test", async function () {


        a1_b = await deposit.userBalance(account1.address)
        console.log("a1 value:", ethers.utils.formatEther(a1_b))
        expect(a1_b).to.equal(ethers.utils.parseEther("1"))

        tx=await deposit.connect(account1).withdraw()
        await tx.wait()

        a1_b_new = await deposit.userBalance(account1.address)
        console.log("a1 value:", ethers.utils.formatEther(a1_b_new))
        expect(a1_b_new).to.equal(ethers.utils.parseEther("0"))

    })
})