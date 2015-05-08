console.log("you're now doing jQuery!");

soundManager.onload = function() {
  soundManager.createSound("english", "audiofiles/english.mp3");
  soundManager.createSound("french", "audiofiles/french.mp3");
  soundManager.createSound("italian", "audiofiles/italian.mp3");
  soundManager.createSound("spanish", "audiofiles/spanish.mp3");
  soundManager.createSound("chinese", "audiofiles/chinese.mp3");
};

// $('.greeting').on("click", function(){
//   // debugger;
//   // console.log($(this));
//   // console.log(event);
//   // $(this).attr('id')
//   var greetingText = "WDI 13 speaks " + $(this).attr('id');
//   $('p').text(greetingText);

// })

// refactore above with callback
$('.greeting').on("click", greetingFunction);

function greetingFunction(){
  var greetingText = "WDI 13 speaks " + $(this).attr('id');
  $('p').text(greetingText);
  var sound = $(this).attr('id').toLowerCase();
  soundManager.play(sound);
}
