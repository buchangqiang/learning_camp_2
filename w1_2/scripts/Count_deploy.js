const { ethers,network } = require("hardhat");
const prams = process.argv
// console.log(prams)
// const value = prams[2]

// console.log("Counter deploy with value:", value);

async function main(){
    const Count=await ethers.getContractFactory("Count");
    const count=await Count.deploy(10);
    await count.deployed();
    console.log("deloyed address: ",count.address,network.name);

    console.log(`Please verify: npx hardhat verify ${count.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });