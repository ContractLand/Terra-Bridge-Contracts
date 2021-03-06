pragma solidity 0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";
import "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";
import "./installed/ERC827Token.sol";
import "./interfaces/IBurnableMintableToken.sol";

contract HomeToken is IBurnableMintableToken, ERC827Token, DetailedERC20, BurnableToken, MintableToken {

  constructor (string _name, string _symbol, uint8 _decimals)
  public
  DetailedERC20(_name, _symbol, _decimals)
  {

  }

  function finishMinting() public returns (bool) {
    revert();
  }
}
