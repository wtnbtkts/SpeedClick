var colors = ["red","blue","yellow","green", "purple", "aqua"];
var cellColor = [];
var marks = ["♥", "♦", "♣", "♠", "◎", "★"];
var cellMark = [];
var nokori = 20;
var wakuColor = 0;
var yoko = 200;
var tate = 50;
var time = 0;
var waku = 0;

initColor();
function initColor() {
	for (var i = 0; i < 6; i++) {
		var rand = Math.floor(Math.random() * colors.length);
		cellColor.push(colors[rand]);
		rand = Math.floor(Math.random() * marks.length);
		cellMark.push(marks[rand]);
	}
	timer();
	setColor();
	frameColor();
}

function setColor() {
	for (var i = 0; i < 6; i++) {		
		document.getElementById("div" + i).style.backgroundColor = cellColor[i];
		document.getElementById("div" + i).textContent = cellMark[i];
	}
	document.getElementById("nokori").textContent = nokori;
	frameColor();
}

function ans(num) {
	if(wakuColor == 0){
		if (colors[num] == cellColor[waku]){
			cellColor.splice(waku,1);
			cellMark.splice(waku,1);
			var rand = Math.floor(Math.random() * colors.length);
			cellColor.push(colors[rand]);
			rand = Math.floor(Math.random() * marks.length);
			cellMark.push(marks[rand]);
			nokori--;
			shorten();
		}
	}else{
		if (marks[num] == cellMark[waku]){
			cellColor.splice(waku,1);
			cellMark.splice(waku,1);
			var rand = Math.floor(Math.random() * colors.length);
			cellColor.push(colors[rand]);
			cellMark.push(marks[rand]);
			nokori--;
			shorten();
		}
	}
	if (nokori == 0) {
		alert("終了！");
	}
}

changeFrame();
function changeFrame(){
	document.getElementById("td" + waku).style.border = "";
	waku = Math.floor(Math.random() * 6);
	document.getElementById("td" + waku).style.border = "5px solid";
}

function frameColor(){
	wakuColor = Math.floor(Math.random() * 2);
	if(wakuColor == 0){
		document.getElementById("td" + waku).style.borderColor = "gray";
	}else{
		document.getElementById("td" + waku).style.borderColor = "black";
	}
}

function shorten(){
	if(yoko > 0){
		yoko -= 4;
		tate -= 1;
		setTimeout("shorten()", 5);
	}else{
		setColor();
		yoko = 200;
		tate = 50;
		document.getElementById("div" + waku).style.width = yoko + "px";
		document.getElementById("div" + waku).style.height = tate + "px";
		document.getElementById("div" + waku).style.lineHeight = tate + "px";
		changeFrame();
		frameColor();
	}
	document.getElementById("div" + waku).style.width = yoko + "px";
	document.getElementById("div" + waku).style.height = tate + "px";
	document.getElementById("div" + waku).style.lineHeight = tate + "px";
}

function timer(){
	if(nokori > 0){
		time += 1;
		document.getElementById("time").textContent = time / 10;
		setTimeout("timer()", 100);
	}
}