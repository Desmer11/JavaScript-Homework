let n0 = document.getElementById("0").value 
let n1 = document.getElementById("1").value
let n2 = document.getElementById("2").value 
let n3 = document.getElementById("3").value 
let n4 = document.getElementById("4").value 
let n5 = document.getElementById("5").value 
let n6 = document.getElementById("6").value 
let n7 = document.getElementById("7").value 
let n8 = document.getElementById("8").value 
let n9 = document.getElementById("9").value 
let plus = document.getElementById("+").value 
let minus = document.getElementById("-").value 
let times = document.getElementById("*").value 
let divide = document.getElementById("/").value 
let decimal = document.getElementById(".").value 
let resultBtn = document.getElementById("=").value
let clearBtn = document.getElementById("clear").value

let number1 = document.getElementById("number1").value
let operator = document.getElementById("operator").value
let number2 = document.getElementById("number2").value
let result = document.getElementById("result").value

  
if (operator == '+') {
    result = number1 + number2;
}  
else if (operator == '-') {
    result = number1 - number2;
}  
else if (operator == '*') { 
    result = number1 * number2;
}  
else if (operator == '/') {  
    result = number1 / number2;
}  


function myFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 
   

number1.addEventListener("click", function(event) {
    event.preventDefault();


})
number2.addEventListener("click", function(event) {
    event.preventDefault();


})
number1.addEventListener("click", function(event) {
    event.preventDefault();


})








    