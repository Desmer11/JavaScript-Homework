

var atm = 3000;
var withdraw = 0

console.log("ATM", atm)
console.log("Withdrawing", withdraw)

withdraw = parseInt(prompt("How Much To Withdraw?"));

if(withdraw <= atm){
    
    console.log("You have succeeded withdrawing: ", withdraw);
    alert(`You have succeeded withdrawing: ${withdraw}
You Have: ${atm} Left On Your Account`);
    
    if (withdraw > atm) {
    console.log("You Do Not Have The Money")
    alert(`You Do Not Have The Money: ${withdraw}
You Have:  ${atm} On Your Account` );
}
}
var atm = atm - withdraw;







