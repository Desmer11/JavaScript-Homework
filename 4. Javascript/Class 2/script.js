console.log("----------Ways To Declare a Variable--------------");

//VAR, LET, CONST

//VAR
var myVar = 2;
//100 lines Later
myVar = 5;
//300 lines later
var myVar = 20;

console.log("myVar:", myVar);

// VAR lets you redeclare variables and give new values

// Let

let myLet = 12;
// 100 lines later
//myLet = 15;
// 300 lines later
//let myLet = 20

console.log("myLet", myLet);
// let doesn't alow to redeclare variables but can give a new value


// Const

const myConst = 25;
//100 lines later
//myConst =30;

console.log("myConst:", myConst);



//---------------Strings-----------
console.log("---------Strings----------");

let myFirstString = 2;



// types of concatinating strings

let string01 = myFirstString + "Jones";
let string02 = `!! ${myFirstString} Jones`;
let string03 = `${myFirstString}
from
multiple
line`;
let string04 = `The sum of number ${5} and the number ${10} is ${5 + 10}`;
let string05 = 'please don\'t cross a red light';

console.log(string01);
console.log(string02);
console.log(string03);
console.log(string04);
console.log(string05);


//Number 
console.log("-----Numbers-----");

let operationWithString = 10 - `bob`;
console.log("Weird operation: ", operationWithString);

console.log(typeof(operationWithString));
console.log(operationWithString === NaN);
console.log(operationWithString == NaN);
console.log(isNaN(operationWithString));

let name1 = `bob`;
console.log(typeof(name1))
console.log(name1 === NaN)
console.log(name1 == NaN)
console.log(isNaN(name1))


// ES6 to the rescue

//let isThisNaN = number.isNaN(name1)
//let isThisNaN2 = number.isNaN(operationWithString)

//sconsole.log(isThisNaN)
//console.log(isThisNaN2)

// ----- LOgical Operators -----
console.log("-------Logical Operator-------")

let operation01 = 2 > 1;
let operation02 = (4 + 5) === (2 + 7);
let operation03 = ("2" + "3") == (20 + 3);

console.log(operation01);
console.log(operation02);
console.log(operation03);

let operation04 = (2 > 3) && (5 == "5");
let operation05 = (2 > 3) || (5 == "5");
let operation06 = `bob` && 12345;
let operation07 = 12345 || `bob`;
let operation08 = null && `bob`;
let operation09 = 12345 && `bob` || null;
let operation10 = null || 12345 && `bob`;
let operation11 = (null || 12345) && `bob`;
let operation12 = true && !(3 === "3");



console.log(operation04);
console.log(operation05);
console.log(operation06);
console.log(operation07);
console.log(operation08);
console.log(operation09);
console.log(operation10);
console.log(operation11);
console.log(operation12);


console.log("------------Control Structures------------");
console.log("---------------IF / ELSE IF / ELSE");

let score = 140;
    

if(score >= 100) {
    console.log("WAOW! YOU HAVE WON THE PRIZE!!!");
    
    if(score >= 150) {
        console.log("WaoW! You WON A BONUS!")
    }
    else {
        console.log("YOU HAVE WON!, BUT NOT THE BONUS!")
    }
} 
else if(score === 100){
    console.log("You Have Won!!!,but barely!")
}
else {
    console.log("OH NO!, YOU LOST!!!");
    
}


let trainer = "Jonas";

if(trainer) {
    console.log(`Your trainer name is ${trainer}`);

}
else {
    console.log("Your group doesn't have a trainer");
}



let input = prompt("Enter a Number");
let fridayCash = parseInt(input);

if(fridayCash >= 50) {
    console.log("You can Go For Dinner And Movie")
}
else if (fridayCash >= 35) {
    console.log("You can Go For Dinner")
}
else if (fridayCash >= 20) {
    console.log("You Can Go For Movie")
}
else {
    console.log("You can stay Home and watch TV :(");
}








