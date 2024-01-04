

let box01 = document.getElementById("div01");
let box02 = document.getElementById("div02");
let box03 = document.getElementById("div03");
let button = document.getElementById("btn");

// box01.addEventListener("click", function() {
//     event.stopPropagation();
//     console.log("box 1 was clicked");
// }, false);

// box02.addEventListener("click", function() {
//     event.stopPropagation(); aswe 
//     console.log("box 2 was clicked");
// }, false);

// box03.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("box 3 was clicked");
// }, false);

// button.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("button was clicked");
// }, false);



// box01.addEventListener("click", function() {
//     console.log("box 1 was clicked");
// }, true);

// box02.addEventListener("click", function() {
//     console.log("box 2 was clicked");
// }, true);

// box03.addEventListener("click", function() {
//     console.log("box 3 was clicked");
// }, true);

// button.addEventListener("click", function(event) {
//     console.log("button was clicked");
// }, true);

let p = document.getElementById("div01");
let p2 = document.getElementById("div02");
let p3 = document.getElementById("div03");
let btn01 = document.getElementById("btn01");

var salary = 1000
var rent = 375
var bills = 250

function function01(){
    expenses = rent + bills
    salary = salary

    result = salary - expenses

    return result
}

console.log(function01())



// function function02(input01, input02){


//     if(input01 < 0, input02 < 0){

//     }
//     const diff01 = Math.abs(100 - input01);
//     const diff02 = Math.abs(100 - input02);
//     if(diff01 < diff02){



//     }
//     if(diff01 > diff02){

//     }
//     return 
// }

// console.log(function02(20, 80))


let number1 = parseInt(prompt("Gimme a number"));
let number2 = parseInt(prompt("Gimme another number"));
 
function checkNumbers(firstNumber, secondNumber) {
    let firstResult = Math.abs(100 - firstNumber);
    let secondResult  = Math.abs(100 - secondNumber);
    if(firstNumber < 0 || secondNumber < 0) {
        alert("Negative number!!!");
    } else if(firstResult < secondResult) {
        alert(`${firstNumber} is closer to 100`);
    } else if(firstResult == secondResult) {
        lert("Both numbers are equaly close");
    } else {
        alert(`${secondNumber} is closer to 100`);
    }
}
 
checkNumbers(number1, number2);