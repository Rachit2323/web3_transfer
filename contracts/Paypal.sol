//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract paypal {
    event transaction(
        address indexed from,
        address to,
        uint amount,
        string symbol
    );
    event recipeints(
        address indexed recipeintOf,
        address recipeint,
        string recipeintName
    );

    function _transfer(
        address payable _to,
        string memory symbol
    ) public payable {
        _to.transfer(msg.value);
        emit transaction(msg.sender, _to, msg.value, symbol);
    }

    function saveTx(
        address from,
        address to,
        uint amount,
        string memory symbol
    ) public {
        emit transaction(from, to, amount, symbol);
    }

    function addRecipents(address recipient, string memory name) public {
        emit recipeints(msg.sender, recipient, name);
    }
}
