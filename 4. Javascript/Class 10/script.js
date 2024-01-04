console.log("JQuery");

$(document).ready(function() {
    let allElements = $("*");
    console.log(allElements);

    let firstTitle = $("#firstSubtitle");
    console.log(firstTitle);

    let wrapperByClassName = $(".innerWrapper");
    console.log(wrapperByClassName);

    let firstWrapper = wrapperByClassName.first();
    console.log(firstWrapper);

    let lastWrapper = wrapperByClassName.last();
    console.log(lastWrapper);

    let paragraphsByTagName = $("p");
    console.log(paragraphsByTagName);

    let firstParagraph = $("p:first");
    console.log(firstParagraph);

    let lastParagraph = $("p:last");
    console.log(lastParagraph);

    let secondParagraph = $(".innerWrapper :nth-child(2)");
    console.log(secondParagraph);

    let firstChild = $(".innerWrapper :first-child");
    console.log(firstChild);

    let lastChild = $(".innerWrapper :last-child");
    console.log(lastChild);

    console.log(lastChild.text());

    let inputValue = $("#input01").val();
    console.log(inputValue);

    let changedValue = $("#input01").val("changed");
    console.log(changedValue);


    $("#emptyDiv").html("I am Paragraph generated from JQuery")
    console.log($("#emptyDiv").html())
    

    let emptyDiv = document.getElementById("emptyDiv");
    console.log(emptyDiv)

    $("h1").before("<p>I am a paragraph before the h1</p>")
    
    $("h1").after("<p>I am a paragraph after the h1</p>")


    paragraphsByTagName.first().css("color", "blue")
    
    paragraphsByTagName.last().css(
        {
            "color": "red",
            "background-color": "green",
            "font-weight": "bold",
        })

    
    paragraphsByTagName.first().hide();
    paragraphsByTagName.first().show();





// JQuerry Button
    let button = $("#btn01");
    button.on("click", function() {
        console.log("Hello from JQuery")
    })
    button.click(function() {
        console.log("Hello from JQuery")
    })





})
















