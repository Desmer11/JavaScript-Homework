
document.getElementById("myTitle").innerHTML = "Hello There! My Title";
document.getElementById("header1").innerText = "Hello There! Header 1";
document.getElementById("header3").innerText = "Hello There! Header 3";







var paragraph = document.getElementsByClassName("paragraph");
paragraph.textContent = 'Hello There';

document.getElementsByClassName("paragraph second").innerText = "Hello There!";




// select all elements with the class name "example"
var elements = document.getElementsByClassName("text1");
// change the innerHTML of each selected element
for (var i = 0; i < elements.length; i++) {
  elements[i].innerHTML = "New HTML content TextField ";
}

// JavaScript
var changeText = document.querySelector("#change-text");

changeText.addEventListener("click", function() {
  changeText.textContent = "Hello There!";
})