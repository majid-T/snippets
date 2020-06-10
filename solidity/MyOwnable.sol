pragma solidity ^0.6.0;


contract MyOwnable {
    // State variable address which will be set by constructor upon deployment
    // will be used later to determine the owner of the contract
    address owner;

    // An event to keep track every time this contract changes ownership
    event CahngeOwnership(address oldOwner, address newOwner, uint256 time);

    // The constructor which will set the deployer of this contract as the owner
    constructor() public {
        owner = msg.sender;
    }

    // Change ownership function which will change the owner of contract.
    // This contract has a require to make sure only owner can call it or revert
    function changeOwner(address newOwner) public returns (bool) {
        require(msg.sender == owner, "Only owner can call this function");
        owner = newOwner;
        emit CahngeOwnership(msg.sender, newOwner, block.timestamp);
    }
}
