

$("#btnGen").click(function () {
    let textInput = $("#textInput").val();
  
    // if(!$('h3').length)
    if ($( "h3" ).length == 0){
        $("body").append("<h3 class='h3'></h3>");
    }
        $("h3").text("Your Text Here: "+textInput)
});


$("#btnGenColor").click(function () {
    let textColor = $("#textColor").val();

    $(".h3").css('color', textColor);
})


$("#btnGenFontSize").click(function () {
    let fontSize = $("#fontSize").val();
    
    $(".h3").css('font-size', fontSize);
})
    

    // let r = Math.floor(Math.random() * 257)