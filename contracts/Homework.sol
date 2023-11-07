// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Homework {
    struct CustomStruct {
        uint id;
        string name;
        bool isActive;
        address userAddress;
    }
    event StructAdded(uint key);
    event StructRemoved(uint key);
    mapping(uint => CustomStruct) public customStructs;

    function addCustomStruct(uint key, string memory name, bool isActive, address userAddress) public {
        CustomStruct memory newStruct = CustomStruct({
            id: key,
            name: name,
            isActive: isActive,
            userAddress: userAddress
        });
        customStructs[key] = newStruct;
        emit StructAdded(key);
    }
    function removeCustomStruct(uint key) public {
        delete customStructs[key];
        emit StructRemoved(key);
    }
}
