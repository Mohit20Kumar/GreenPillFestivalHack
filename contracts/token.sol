<!--This code is used for the creation and minting of ERC20 tokens called FoodPunk FPK, the interface IERC is given in the FoodDistribution sol file -->

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FoodAshna is ERC20, Ownable {
    constructor() ERC20("FoodPunk", "FPK") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
