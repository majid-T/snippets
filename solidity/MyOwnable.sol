pragma solidity ^0.6.0;


contract MyOwnable {
    address owner;

    event CahngeOwnership(address oldOwner, address newOwner, uint256 time);

    constructor() public {
        owner = msg.sender;
    }

    function changeOwner(address newOwner) public returns (bool) {
        require(msg.sender == owner, "Only owner can call this function");
        owner = newOwner;
        emit CahngeOwnership(msg.sender, newOwner, block.timestamp);
    }
}
