pragma solidity ^0.4.23;

contract TransferAndCallTest {
    address public from;
    uint public value;

    function doSomething(address _from, uint _value) external {
        from = _from;
        value = _value;
    }
}
