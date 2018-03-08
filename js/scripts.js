$(document).ready(function() {
  $("pig-latin").submit(function(event){
    event.preventDefault();
    var inputString = $("#word").val();
    var result = userSentence(inputString)

    $("#result").text(result);
  });
});

//front end logic ends

var vowels = ["a", "e", "i", "o", "u", "A", "E","I", "O", "U"];

var userInput = function(input) {
  var charArray =  input.split("");

  for (i=0; ;i++){
    if (vowels.indexOf(charArray[i])>=0){
      var breakpoint = i;
      break;
    }
  }
  var firstConsonants = charArray.splice(0, breakpoint);
  charArray = charArray.concat(firstConsonants);
  charArray.push("ay");
  return charArray;
}

var userSentence = function(input) {
  var finalMessage = "";
  var wordArray = input.split(" ");
  wardArray.forEach(function(word) {
    var translatedWord = userInput(word).join("");
    finalMessage = finalMessage + translatedWord + " ";
  });
  return(finalMessage)
  }
