const { expect } = require("chai");
const { ethers } = require("hardhat");

let count;
describe("Count",function(){
    async function init(){
        const Count=await ethers.getContractFactory("Count");
        count=await Count.deploy(1);
        await count.deployed();
        console.log("deloyed address: ",count.address);
    }
    before(async function(){
        await init();
    })

    it("init 1", async function(){
       expect(await count.Counter()).to.equal(1);
    })

    it("count test",async function(){
        let tx=await count.count();
        await tx.wait();
        expect(await count.Counter()).to.equal(2);
    })

    it("add 10 test",async function(){
        let curValue=await count.Counter();
        let tx=await count.add(10);
        await tx.wait();
        expect(await count.Counter()).to.equal(ethers.BigNumber.from(10).add(curValue));
    })
})