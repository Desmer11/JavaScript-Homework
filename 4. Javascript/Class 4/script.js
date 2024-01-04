// Array
console.log("-----Array-----");

let myFirstArray = ["Jonas", "Marte", "Stefan", "Ivan", "Ilija"];
let emptyArray = [];
let mixedArray = ["string", 34, true, undefined, false, {}, [], null];

console.log(myFirstArray);
console.log(emptyArray);
console.log(mixedArray);

//Acces elements in arrays
let firstElement = myFirstArray[0];
console.log(firstElement);

let secondElement = myFirstArray[1];
console.log(secondElement);

// Change value of an element in arrays
myFirstArray[0] = "Matej";

console.log(myFirstArray);
console.log(myFirstArray[0]);

// Getting the lenght of an array
console.log(`The lenght of my myfirstArray is:  ${myFirstArray.lenght}` );

let lastElement = myFirstArray[myFirstArray.lenght - 1];
console.log(lastElement);

// Adding and Removing Elements

myFirstArray[myFirstArray.lenght] = "Dimitar";
console.log(myFirstArray);
console.log(myFirstArray[myFirstArray.lenght - 1]);
console.log(myFirstArray[4]);


// .push() is used for adding elements at the end of an array
// we can add mutiple elements at once

myFirstArray.push("Nikola", "Teodor");
console.log(myFirstArray);


// .unshift() is used for adding elements at the begining of an array
// we can add mutiple elements at once
myFirstArray.unshift("Aleksandar", "Pane");
console.log(myFirstArray);


// splice - index, how many elements you want to remove, new elements
//
myFirstArray.splice (8, 0, "Bob", "Bobski");
console.log(myFirstArray)


// .pop() is used for removing elements at the end of the array 
myFirstArray.pop();
console.log(myFirstArray);

// .shift() is used for removing element at the start of the array
myFirstArray.shift();
console.log(myFirstArray);

// Loop
console.log("-----Loop-----");

// while

let counter = 1;

while (counter < 10) {
    console.log(counter);
    counter++;

}


// Exercise

let whileCounter = 101
let sumOfSquares = 0

while(whileCounter <= 150) {
    //whileCounter++; if we put the counter first, we will skip the first value (101)
    console.log(`while Counter: ${whileCounter}`);
    sumOfSquares += Math.pow(whileCounter, 2);
    console.log(`Math.pow(): ${sumOfSquares}, 2`);
    console.log(`Sum of squares: ${sumOfSquares}`);
    whileCounter++;

}
console.log(`The sum of the Squares of every number from 101 to 150 is: ${sumOfSquares}` );

// Ask the user to guess our secret number via prompt (ranging from 0 - 9)
// The user should be able to guess as many times until they guess our number

let secretNumber = 7;
let userNumber = 0;

/*
do {
    userNumber = parseInt(prompt("Guess our secret number! Pick from 1 - 9"));
    console.log()
} while (userNumber !== secretNumber) {
}
console.log(`Yay you Guessed It!!! ${secretNumber}`);
*/

while(true) {
    userNumber = parseInt(prompt("Guess our secret number! Pick from 1 - 9"));
    if(userNumber === secretNumber) {
        console.log(`Yay you Guessed It!!! ${secretNumber}`);
        alert(`Yay you Guessed It!!! ${secretNumber}`);
        break;

    }



}

















