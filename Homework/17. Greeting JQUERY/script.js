


$("#btnGreeting").click(function () {
  let input = $("#input").val();

  // if(!$('h3').length)
  if ($( "h3" ).length == 0){
      $("body").append("<h3 class='greeting-title'></h3>");
  }
      $("h3").text("Hello"+input)
});