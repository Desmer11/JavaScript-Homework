console.log("Hello From Jones")

//Variables


//Declaration
var trainer;
console.log(trainer);

//Initialisation
trainer = "Jones";
console.log(trainer);

//Declaration and Initialisation
var assistant = "Marte";
console.log(assistant);

// Undefined vs Null

console.log("--------Undefined vs Null--------------------");

var testVar;
console.log(testVar);
console.log(typeof testVar);

var testVar02 = null;
console.log(testVar02);
console.log(typeof testVar02);


// Naming Convention Types

// Start lowercase letters
// Second word in Uppercase

// camelCase: userInputNumber
// pascalCase: UserInputNumber
// kebab-case: user-input-number


// Data Types

//String

var name1 = "Jones Kotevski";
console.log(typeof name1);

// Number

var num1 = 5;
console.log(typeof num1);

// Boolean
var booleanType = true;
console.log(typeof booleanType);


// Equality in js
console.log("---------- Equality in Js ----------------");

// === Checks Value and Type
console.log(5 ==="5");

// == Checks Value
console.log(5 == "5");


// Checks Value and Type

console.log(4 !== "4");

// Checks Value
console.log(4 != "4");


console.log(4 > 2);

console.log(7* 12);

// Assignment Operators

var a = 5;
console.log("Original value of a:", a);
var b = 1;
console.log("Original value of b:", b);

// a = a + b
a += b;
console.log("new value of a: ", a);

// a = a - b
a -= b;
console.log("new value of a: ", a);


//Javascript to convert Feet to Meters
console.log("Javascript to convert Feet to Meters");

var feet = 90;
var ponder = 0.3048;
var feetToMeters = feet * ponder;

console.log(feet + "feet are equal to" + feetToMeters);

// Newer Fancy Way

console.log(`${feet} feet are equal to ${feetToMeters}`);


// Calculate Rectangle

var sideA = 14;
var sideB = 8;
var result = sideA * sideB;

console.log(`Rectangle area is ${result}m2`);

// Calculate Circle

var radius = 10;
var pi = Math.PI;
console.log(pi);
 var areaCircle = (radius * radius) * pi;
 console.log(`Circle area is ${areaCircle}m2`);





