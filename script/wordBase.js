//* Words and Switch to activate the variable in mainFunction()

var theme0 = {
	english:  ["door","window","room","floor","ceiling","wall","elevator","house","apartment","hallway","stairs"],
	estonian: ["uks","aken","tuba","põrand","lagi","sein","lift","maja","korter","koridor","trepp"]
};

var theme1 = {
	english: ["man","woman","boy","girl","aunt","uncle","mother","father","brother","sister","cousin"],
	estonian: ["mees","naine","poiss","tüdruk","tädi","onu","ema","isa","vend","õde","nõbu"]
};

var theme2 = {
	english: ["car","bus","tram","train","boat","ship","bicycle","skateboard","rollerskates","subway","aeroplane"],
	estonian: ["auto","buss","tramm","rong","paat","laev","jalgratas","rula","rulluisud","metroo","lennuk"]
};

var theme3 = {
	english: ["I","you - sgl.","him/her (his/hers)","we (our)","you - pl. (your)","them","mine","your","for me","for you","their"],
	estonian: ["mina","sina","tema","meie","teie","nemad","minu","sinu","minule","sinule","nende"]
};

var theme4 = {
	english: ["Hello","Good day","Good morning","Good evening","Goodbye","Good night","Nice to meet you","How are you","I am doing well","Excuse me","What's up"],
	estonian: ["Tere","Tere päevast","Tere hommikust","Tere õhtust","Head aega","Head ööd","Meeldiv tutvuda","Kuidas läheb","Mul läheb hästi","Vabandust","Mis toimub"]
};

function wordBase(){
	switch(theme){
		case 0: wordBaseChoice = theme0;
		break;
		case 1: wordBaseChoice = theme1;
		break;
		case 2: wordBaseChoice = theme2;
		break;
		case 3: wordBaseChoice = theme3;
		break;
		case 4: wordBaseChoice = theme4;
		break;
	};
	wordBaseChoice;
	//*console.log(wordBaseChoice);
};
