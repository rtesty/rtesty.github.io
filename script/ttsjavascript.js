var soundState="Sound: Off";
var text = document.querySelector("#choice1");

function soundOnOff() {
  if (soundState=="Sound: On") {
       soundState="Sound: Off";
       } else if (soundState=="Sound: Off") {
         soundState="Sound: On";
         };
  soundState;
  document.getElementById("status").innerHTML=soundState;
  };
soundOnOff();

function speakNow() {
	if (soundState=="Sound: On") {
  var speech = new SpeechSynthesisUtterance();
  speech.rate = .9;
  speech.pitch = 1;
  speech.volume = 1;
  speech.voice = speechSynthesis.getVoices()[0];
  speech.text = y;
  speech.lang = "fi-FI";
  speechSynthesis.speak(speech);
 };
};

	
choice1.onclick = function(e){
  e.preventDefault();
  speakNow();
};
choice2.onclick = function(e){
  e.preventDefault();
  speakNow();
};
choice3.onclick = function(e){
  e.preventDefault();
  speakNow();
};