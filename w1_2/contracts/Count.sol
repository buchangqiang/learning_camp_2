// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";
contract Count{
    uint public Counter;
    constructor(uint _num){
        Counter=_num;
    }
    
    function count() public {
        Counter=Counter+1;
    }
    function add(uint num) public{
        console.log("add....",msg.sender,num);
        Counter=Counter+num;
    }
}