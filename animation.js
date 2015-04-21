function loadGraphics() {
	loadImages();
	drawStatusBar();
	drawQuestionbox();
	drawAnswerboxes();
	drawPhase();
}

function drawQuestionbox(){
	context.rect(60,60,600,160);
	context.stroke();
}

function drawAnswerboxes(){
	context.rect(60,240,290,100);
	context.rect(370,240,290,100);
	context.rect(60,360,290,100);
	context.rect(370,360,290,100);
	context.stroke();
}

function drawPhase(){
	context.font = "bold 30px 'Electrolize'";
	context.fillStyle="black";
	context.fillText("1/10",610,40);
}

function drawStatusBar(){
	drawBar();
	context.rect(60,15,360,30);
	context.stroke();
}

function drawBar(){
	context.rect(60,16,300,28);
	context.fillStyle= "green";
	context.fill();
}
function loadImages(){
	var backgroundImage1 = new Image();
  	backgroundImage1.src = 'mopojengi.png';
  	context.drawImage(backgroundImage1,0,0,720,480);
}
