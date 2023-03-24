<!--This is a solidity contract having the functions such as user authentication, volunteer assignment, the poor person's acknowledgemnt if he received the food or not and the volunteer claim as well-->
<!-- The ERC20 token FoodPunk FPK has been used and the address is: 0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8 -->


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FoodDistribution {
    error conditionNotMet();

    IERC20 public token;
    uint256 amt= 1 ether;
  //  ERC20 token 
  //three users of the system
  address public volunteer;
  address public restaurant;
  address public user;
  //uint256 _restrauntId=23;
  // Define the status of the transaction
  bool public foodDelivered;

  constructor(address _volunteer, address _restaurant, address _user, address _tokenAddress) {
    volunteer = _volunteer;
    restaurant = _restaurant;
    user = _user;
    token = IERC20(_tokenAddress);
  }
  mapping(address => uint256) userToRestr;
  mapping(address => mapping(uint256 => address)) order;
  mapping(uint256 => address) volunteerAssigned;
  mapping(address => bool) isRestraunt;

  mapping(address => bool) volunteerAgreed;
  mapping(address => bool) userAgreed;

  function volunteerResponse(address _user, uint256 _restrauntId) public {
      //require(order[_user][_restrauntId] == msg.sender, "Not the assigned volunteer");
      volunteerAgreed[msg.sender] = true;
  }

  function userResponse(uint256 _restrauntId) public {
      //require(userToRestr[msg.sender] == _restrauntId, "Not the user who ordered!!");
      userAgreed[msg.sender] = true;
  }
  //to deliver food from restaurant to user
//   function deliverFood() public {
//     require(msg.sender == volunteer, "Only the volunteer can deliver food");
//     foodDelivered = true;
//   }

 
  // Function for user to acknowledge food
  function acknowledgeFood(uint256 _restrauntId) public payable returns(bool){
      
    // require(volunteerAgreed[order[msg.sender][_restrauntId]] , "Volnteer not agreed!");
    // require(userAgreed[msg.sender], "User not agreed!");


    //require(foodDelivered == true, "Food has not been delivered yet");
    //The require statement checks a condition and if the condition is not true, it will throw an exception and revert the transaction.
    token.transfer( volunteer, 100000000000000000);
    token.transfer(restaurant, 100000000000000000);

    return true;
    // token.transferFrom(address(this), volunteer,100000000000000000);
  }

//  function assignVolunteer(uint256 orderId, address _volunteer) external {
//       require(isRestraunt[msg.sender], "only registered restaurants can assign voluteers");
//   }
}
