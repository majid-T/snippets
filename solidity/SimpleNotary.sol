// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;


//Simple notary contract to save strings and be able to check later
contract NotaryOffice {
    //Actuall mapping of notarized strings which will be saved on blockchain
    mapping(bytes32 => bool) private docs;

    //Setting the owner of the contract
    address private officeOwner;

    constructor() public {
        //Setting the contract owner on deployment
        officeOwner = msg.sender;
    }

    //Helper function to cast string to bytes and keccak256 hash byte data
    function hashDoc(string memory _docToHash) private pure returns (bytes32) {
        return keccak256(bytes(_docToHash));
    }

    // Private function to saved hash data to actuall mapping
    function storHashInDocs(bytes32 _documentHash) private {
        docs[_documentHash] = true;
    }

    // ----------- Exposed functions ----------------
    // Public function to expose saving string ability
    function storeDoc(string memory _docToSave) public payable {
        // require 1 ether to save a string
        require(
            msg.value >= 1 ether,
            "Notary Office: We require 1 ether to save a document"
        );
        storHashInDocs(hashDoc(_docToSave));
    }

    // Public function to check for string if it has been saved
    function checkDocument(string memory _docToCheck)
        public
        payable
        returns (bool)
    {
        // require minimum 1 ether for each time checking to be paid
        require(
            msg.value >= 1 ether,
            "Notary Office: We require one ether for our services"
        );
        return docs[hashDoc(_docToCheck)];
    }

    //checkout public function to get ether back to owner
    function checkout() public {
        require(
            msg.sender == officeOwner,
            "Notary Office:Only owner can checkout"
        );
        require(
            address(this).balance > 1,
            "Notary Office:We still havent make that much money"
        );
        //Setting amount to balance - 1 to already have some balance
        uint256 balance = address(this).balance - 1;
        msg.sender.transfer(balance);
    }
}
