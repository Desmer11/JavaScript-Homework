let firstDiv = document.querySelector("div");
let allParagraphs = document.getElementsByTagName("p");
let lastDiv = document.getElementsByTagName("body")[0].lastElementChild;
let header3last = lastDiv.getElementsByTagName("h3")[0];
let header1last = header3last.previousElementSibling;
let paragraphSecondText = document.getElementsByClassName("second")[0].innerText;;
document.querySelector("text").innerText += " text!";
header3last.innerText = "Text added from JS";
header1last.innerText = "Text added from JS also";



