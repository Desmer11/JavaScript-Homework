// Selectors

// id selector - it returns one element

let myHeader = document.getElementById("myTitle");
console.log(myHeader);

//myHeader.innerText =  "This is my new Title";



// class selector = returns an array of elements
let paragraph = document.getElementsByClassName("myParagraph");
console.log(paragraph);

let paragraphOneElement = document.getElementsByClassName("second");
console.log(paragraphOneElement);
console.log(paragraphOneElement[0]);

// tag selector - returns an array of elements
let tagParagraphs = document.getElementsByTagName("p");
console.log(tagParagraphs);



// querry selector - you need to use full selector syntax, just as in CSS


let firstDiv = document.querySelector(".myDiv");
console.log(firstDiv);

let myHeaderQuery = document.querySelector("#myHeader");
console.log(myHeader);      

let allParagraphQuery = document.querySelectorAll("p");
console.log(allParagraphQuery);

// Traversing the DOM Tree

let child = document.querySelector(".child");
console.log(child);

let nextSibling = child.nextElementSibling;
console.log(nextSibling);

let previousSibling = nextSibling.previousElementSibling;
console.log(previousSibling);



// parent selector



let parentElement = child.parentElement;
console.log(parentElement);

console.log(parentElement.querySelector(":nth-child(2)"));
console.log(parentElement.firstElementChild);
console.log(parentElement.lastElementChild);
console.log(parentElement.children);


// Changing Elements


console.log(myHeader);
console.log(myHeader.textContent);
console.log(myHeader.innerText);

myHeader.innerText = "";
myHeader.innerText = "I am the new header of the page";
myHeader.innerText = "Hello G7";

console.log(myHeader.textContent);




let pets = ["Dog", "Cat", "Fish", "Rabbit"];

let list = document.getElementById("list");

for(let pet of pets) {
    list.innerHTML += `<li>${pet}</li>`

}

list.style.color = "red"
list.style.backgroundColor = "green"


// function Excercise

function multiplyTwoNumbers(num1, num2) {
    let result = num1 * num2
    return result;
}


let calcResult = multiplyTwoNumbers(3, 5);
let calcResult2 = multiplyTwoNumbers(5, 5);

let resultParagraph = document.getElementById("result")
resultParagraph.innerText = `The Result is: ${calcResult}`;

let resultParagraph2 = document.getElementById("result2")
resultParagraph2.innerText = `The result is: ${calcResult2}`;


function sayHi(name){
    alert(`Hello back ${name}, on this page you can do`)



}
let namePrompt = prompt("Enter Your Name")
sayHi(namePrompt);

