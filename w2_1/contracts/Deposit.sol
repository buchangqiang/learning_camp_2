// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// import "hardhat/console.sol";
contract Deposit {
    mapping(address => uint256) public userBalance;
    address immutable owner;

    constructor() {
        owner = msg.sender;
    }

    function deposit() public payable {
        userBalance[msg.sender] = msg.value + userBalance[msg.sender];
    }

    function withdraw() public {
        require(userBalance[msg.sender]>0,"not have deposit..");
        payable(msg.sender).transfer(userBalance[msg.sender]);
        userBalance[msg.sender] = 0;
    }
}
