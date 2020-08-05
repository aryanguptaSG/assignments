(function(window) {
	var helloSpeaker = {}
	window.helloSpeaker = helloSpeaker;
	var speakWord = "Hello";
	helloSpeaker.speak = function(name) {
		console.log(speakWord + " " + name);
	}
})(window);
