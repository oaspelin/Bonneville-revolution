function loadGraphics() {
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
	context.fillText("1/10",620,40);
}