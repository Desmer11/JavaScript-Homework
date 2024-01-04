
//---- SWITCH STATEMENTS ----

// if/else

/*
let userInput = parseInt(prompt("Enter a Number from 1-7"));


if(userInput === 1) {
    console.log("You are free on Monday");

} else if(userInput === 2) {
    console.log("You have class on Tuesday")
} else if(userInput === 3) {
    console.log("You are free on Wednesday")
} else if(userInput === 4) {
    console.log("You have class on Thursday")
} else if(userInput === 5) {
    console.log("You are free on Friday")
} else if(userInput === 6) {
    console.log("You have class on Saturday")
} else if(userInput === 7) {
    console.log("You are free on Sunday")
} else {
    console.log("There is no Such Thing")
}
*/

/*
switch(userInput) {
    case 1 :
        console.log("You are free on Monday");
        break;

    case 2 :
        console.log("You have class on Tuesday");
        break;

    case 3 :
        console.log("You are free on Wednesday");
        break;
        
    case 4 :
        console.log("You have class on Thursday");
        break;

    case 5 :
        console.log("You are free on Friday");
        break;

    case 6 :
        console.log("You have class on Saturday");
        break;

    case 7 :
        console.log("You are free on Sunday");
        break;

    default :
        console.log("There is no Such Thing")
        break;
}
*/

// Functions
// Good Practice first declare the function
// Then call it/ use it.

console.log("---- Functions ----")


function sayHello() {
    console.log("Hello Function");

}

sayHello();

sayHello();


// functions with parameters
// scope

let globalScope = 222;                      // Global Scope
let num1 = 10
let num2 = 20





function sumOfNumbers(number1, number2){
    let result = number1 + number2;        // Functional Scope
    console.log("The Result Is: ", result);
    globalScope = 300;


}

sumOfNumbers(4, 5);
console.log(globalScope);
let result = 20;
console.log("Outside Result", result);

sumOfNumbers(num1, 5);
sumOfNumbers(num1, num2);

sumOfNumbers(num1, 88);

// functions with return values

function sumOfNumbersReturn(num1, num2) {
    let result = num1 + num2;
    return result;
    


}

let resultSum1 = sumOfNumbersReturn(10, 40);
let resultSum2 = sumOfNumbersReturn(100, 40);
let totalResult = resultSum1 + resultSum2;

console.log(resultSum1);
console.log(resultSum2);
console.log("Total Result: ", totalResult);




// default Parameters

function sumOfThreeNumbers(num1, num2, num3 = 150) {
    let resultOfNumbers = num1 + num2 + num3;
    return resultOfNumbers

}





console.log("---- Scope ----");

let input = 5 

function scopeTestFunction(num1, num2) {
    let result = num1 + num2 + input;
    console.log("Result is: ", result );

    if(input === 5) {
        let result2 = num1 + num2 - input;
        var someNumber = 5555;
        const someConst = 111;

        console.log("Result 2", result2);
        console.log("Some Const", someConst);
    }

    console.log("some Number: ", someNumber);


}

scopeTestFunction(1, 10);






