var text = document.querySelector("#choice1");


function speakNow() {
  var speech = new SpeechSynthesisUtterance();
  speech.rate = .9;
  speech.pitch = 1;
  speech.volume = 1;
  speech.voice = speechSynthesis.getVoices()[0];
  speech.text = y;
  speech.lang = "fi-FI";
  speechSynthesis.speak(speech);
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