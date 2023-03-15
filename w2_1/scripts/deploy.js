const { ethers } = require("hardhat");
async function main(){
    var Deposit=await ethers.getContractFactory("Deposit")
    var deposit=await Deposit.deploy()
    await deposit.deployed()
    console.log("Deposit deployed address:",deposit.address)
}
main()