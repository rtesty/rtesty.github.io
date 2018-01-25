

//* get number of topics in dropdown
var topicNumber = document.getElementById("topics");
var topicLength = topics.children.length;

//* change background color on choosing topic
function colorDefault() {
	for(i=0; i<topicLength; i++) {
	var topics = "tpc"+i;
	document.getElementById(topics).style.backgroundColor = "#596F62";
	};
};

function topicColor(x) {
	x.style.backgroundColor = "#7EA16B"
};
		
//* Theme choice
//*console.log(theme);

function themeChoice() {
	for(i=0; i<topicLength; i++) {
		var topics = "tpc"+i;
		if(document.getElementById(topics).style.backgroundColor == 'rgb(126, 161, 107)') {
			theme = i;
			//*console.log(theme);
		};
};
};



