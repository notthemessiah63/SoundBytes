console.log("Hello WDI 13!");

//collect DOM elements
var button = document.getElementsByClassName("greeting");
var outputText = document.getElementById("output-text");

//iterate over button array and create event listener for each
for(var i=0; i < button.length; i++){
  //check that your loop works
  console.log(button[i]);
  button[i].addEventListener('click', function(event){
    // check that your event listener works
    // console.log("button clicked");
    // check what event and this is with a debugger
    // debugger;
    // collect the language spoken from the id
    // console.log(this.id);
    // check how to access text of outputText <p> tag, and check how to change css style display
    // debugger;
    // outputText.textContent = "";
    // var greetingText = outputText.textContent.concat("WDI 13 speaks " + this.id + "!");
    // outputText.textContent = greetingText;
    // refactor into separate function
    showGreeting(this.id);
  })
}

function showGreeting(language){
  outputText.textContent = "";
  var greetingText = outputText.textContent.concat("WDI 13 speaks " + language + "!");
  outputText.textContent = greetingText;
}
