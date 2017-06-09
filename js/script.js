
function pingPong(userInput){
  var pingponged = [];

  for (var fx = 1; fx <= userInput; fx+=1){
    if (fx % 15) === 0){
      pingponged.push ("Ping-Pong");
    }
     else if (fx % 5) === 0){
      pingponged.push ("Pong");
    }
     else if (fx % 3) === 0){
      pingponged.push ("Ping");
    }
     else{
    pingponged.push (fx);

        }
    }

}







$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    $("#userOutput").empty();
    var userInput = parseInt($("input#number").val());
    var result = pingPong(userInput);
    pingponged.forEach(function(output) {
    $("#userOutput").append("<li>" + output + "</li>");
    event.preventDefault();
  });
});
});
