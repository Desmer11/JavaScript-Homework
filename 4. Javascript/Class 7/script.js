console.log('I am connected!')
 
let paragraphs = document.querySelector('.paragraph');
paragraphs.style.backgroundColor = 'lightblue';
 
let header = document.getElementById('myHeader');
header.style.fontSize = "30px";
 
let input = document.querySelector('input');
input.value = "Hello World";


// Events
// 1. Select the Element (Button)
// 2. Choose the event (Click)
// 3. Respond to event (Write Code)

//Three ways to bind to an element 
// 1. Html event handlers
// 2. Traditional DOM event handlers
// 3. DOM Level 2 event handlers

let btnHtml2 = document.getElementById("btnHtml2");

function alertMessage() {
    alert('This Is A Message!');

}

let btn3Html = document.getElementById("btn3Html")
let messageText = document.getElementById("message")

function changetext() {
    messageText.innerText = 'Tnis message has been changed' 

}

// Named Function
// let btnTraditionalDom2 = document.getElementById('btnTraditionalDom2')
// function alertMe() {
//     alert('Button Clicked - event binding with Traditional DOM 2')

// }
// btnTraditionalDom2.onclick = alertMe();


// Anonimous functions

document.getElementById('btnTraditionalDom1').onclick = function() {
    alert('Button Clicked - event binding with Traditional DOM')
}


// --------------DOM Level 2 Event Handlers-----------------

let btn5 = document.getElementById('btn5')
btn5.addEventListener('click', function() {
    alert('Button Clicked! - We Learned About addEventListener !')
})


document.getElementById('btnExcercise1').onclick = function() {
   
    let name = prompt("Enter Your Name")
    alert(`Hello ${name}`)
    
}

// -----Excercise 2-----

let heading = document.getElementById("myHeader");
let showText = document.getElementById("btnShow");
let hideText = document.getElementById("btnHide");
 
showText.addEventListener("click", function() {
    heading.style.display = "block";
});
hideText.addEventListener("click", function() {
    heading.style.display = "none";
});


let redDivider = document.getElementById('redDiv')
let secondDivider = document.getElementById('secondDiv')
let paragraph = document.getElementById('someParagraph')


function setColorDiv(event) {
    event.target.style.backgroundColor='red';
}
redDivider.addEventListener('mousemove', setColorDiv)
secondDivider.addEventListener('click', setColorDiv)
paragraph.addEventListener('click', setColorDiv)

// Removing Event Listener

redDivider.addEventListener('click', function(event){
    event.target.style.backgroundColor = 'green'
    redDivider.removeEventListener('mousemove', setColorDiv)
})



//
let inputName = document.getElementById('nameField')
let btnField = document.getElementById('btnField')
btnField.addEventListener('click', function(){

    console.log(`Somebody shared their name: ${inputName.value}`)
    inputName.value = "";
})


let FirstName = document.getElementById('FirstName')
let LastName = document.getElementById('LastName')
let Email = document.getElementById('Email')
let Password = document.getElementById('Password')
let submit = document.getElementById('submit')
let information = document.getElementById('information')

function info() {
    let information = `
    ${FirstName}
    ${LastName}
    ${Email}
    ${Password}
    
    `
    alert(info())
    return information
}
document.getElementById("information").innerText = info();



let inputs = document.getElementsById('userForm').children;
let formBtn = document.getElementsById('formButton')
let formMsg = document.getElementsById('formMessage')

function getUserInfo(inputElements) {

    let result = "user: "
    for (let input of inputElements) {
        if (input.value) {
            result += input.value + " ";
        }
        

}
    return result;
}

formBtn.addEventListener('click', function(){
    formMsg.innerText = getUserInfo(inputs);

})







