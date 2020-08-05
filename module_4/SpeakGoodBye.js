(function(window) {
 var byeSpeaker = {}
 window.byeSpeaker = byeSpeaker;
var speakWord = "Good Bye";
byeSpeaker.speak = function(name){
  console.log(speakWord + " " + name);
}})(window);
