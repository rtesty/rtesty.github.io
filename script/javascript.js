//* Object and variables
var building, i, x, y, z, w, s1, s2, s3, ns1, ns2, ns3;
s1 = 0;
s2 = 0;
s3 = s1+s2;

document.getElementById("correct").innerHTML = s1;
document.getElementById("incorrect").innerHTML = s2;
document.getElementById("ratio").innerHTML = s3;


var mainFunction = function(){

var building = {
	english:  ["la puerta","la ventana","el cuarto","el piso","el techo","la pared","el ascensor","la casa","el apartamento","el pasillo","la escalera"],
	estonian: ["uks","aken","tuba","põrand","lagi","sein","lift","maja","korter","koridor","trepp"]
};

var randm1 = Math.round(Math.random()*10);
var randm2 = Math.round(Math.random()*10);
var randm3 = Math.round(Math.random()*10);

//* randoms should not return same value

while (randm1 == randm2 || randm1 == randm3 || randm2 == randm3) {
  var randm1 =  Math.floor(Math.random()*10);
  var randm2 =  Math.floor(Math.random()*10);
  var randm3 =  Math.floor(Math.random()*10);
};

x = building.english[randm1];
y = building.estonian[randm1];
z = building.estonian[randm2];
w = building.estonian[randm3];

//*div colors and result bar to default

button1.style.background = "#00FF40";
button2.style.background = "#00FF40";
button3.style.background = "#00FF40";
document.getElementById("correctAnswer").innerHTML = "";


//* Words presented on the screen

document.getElementById("wordQuestion").innerHTML = x;


switch (Math.round(Math.random()*5)) {
	case 0: 	document.getElementById("choice1").innerHTML = y;
		        document.getElementById("choice2").innerHTML = z;
		        document.getElementById("choice3").innerHTML = w;
		      break;
	case 1:	  	document.getElementById("choice1").innerHTML = z;
		        document.getElementById("choice2").innerHTML = y;
		        document.getElementById("choice3").innerHTML = w;
		      break;
	case 2:	  	document.getElementById("choice1").innerHTML = z;
		        document.getElementById("choice2").innerHTML = w;
		        document.getElementById("choice3").innerHTML = y;
		      break;
	case 3:	  	document.getElementById("choice1").innerHTML = y;
		        document.getElementById("choice2").innerHTML = w;
		        document.getElementById("choice3").innerHTML = z;
		      break;
	case 4:	  	document.getElementById("choice1").innerHTML = w;
		        document.getElementById("choice2").innerHTML = z;
		        document.getElementById("choice3").innerHTML = y;
		      break;
	case 5:	  	document.getElementById("choice1").innerHTML = w;
		        document.getElementById("choice2").innerHTML = y;
		        document.getElementById("choice3").innerHTML = z;
		      break;
};
};

//* Validation of user's answer

function answerValidation1(divObj) {
	if(document.getElementById("correctAnswer").innerHTML == ""){
	if (document.getElementById("choice1").innerHTML == y) {
		button1.style.background = "#5882FA";
		document.getElementById("correctAnswer").innerHTML = y;
		ns1= parseInt(s1);
		s1= ns1+1;
		updateResults();
	} else {
		button1.style.background = "#F5A9A9";
		document.getElementById("correctAnswer").innerHTML = y;
		ns2= parseInt(s2);
		s2= ns2+1;
		updateResults();
	};
	};
};

function answerValidation2(divObj) {
	if(document.getElementById("correctAnswer").innerHTML == ""){
	if (document.getElementById("choice2").innerHTML == y) {
		button2.style.background = "#5882FA";
		document.getElementById("correctAnswer").innerHTML = y;
		ns1= parseInt(s1);
		s1= ns1+1;
		updateResults();
	} else {
		button2.style.background = "#F5A9A9";
		document.getElementById("correctAnswer").innerHTML = y;
		ns2= parseInt(s2);
		s2= ns2+1;
		updateResults();
	};
	};
};

function answerValidation3(divObj) {
	if(document.getElementById("correctAnswer").innerHTML == ""){
	if (document.getElementById("choice3").innerHTML == y) {
		button3.style.background = "#5882FA";
		document.getElementById("correctAnswer").innerHTML = y;
		ns1= parseInt(s1);
		s1= ns1+1;
		updateResults();
	} else {
		button3.style.background = "#F5A9A9";
		document.getElementById("correctAnswer").innerHTML = y;
		ns2= parseInt(s2);
		s2= ns2+1;
		updateResults();
	};
	};
};

//* update results and disable onclick

var updateResults = function() {
document.getElementById("correct").innerHTML = s1;
document.getElementById("incorrect").innerHTML = s2;
ns3= s1*100/(s1+s2);
s3= ns3.toFixed(1);
document.getElementById("ratio").innerHTML = s3+"%";
};

	
