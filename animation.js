function loadGraphics(time,backgroundImage1) {
	drawBackground();
	drawStatusBar();
	drawBoxes();
	drawPhase();
	
	function drawBoxes(){
		context.fillStyle= "rgba(255, 255, 255, 0.7)";
		context.fillRect(60,60,600,160);
		drawAnswerboxes();
		context.stroke();
	}

	function drawAnswerboxes(){
		context.fillRect(60,240,290,100);
		context.fillRect(370,240,290,100);
		context.fillRect(60,360,290,100);
		context.fillRect(370,360,290,100);
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
		context.fillStyle= "green";
		context.fillRect(60,16,300-time/100,28);
	}
	function drawBackground(){
		context.drawImage(backgroundImage1,0,0,720,480);
	}

}

function loadImages(){
		var backgroundImage1 = new Image();
	  	backgroundImage1.src = 'images/mopojengi.png';
	  	return backgroundImage1;
}
