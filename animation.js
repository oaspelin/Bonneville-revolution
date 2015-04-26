
//this function needs additional parameters when we progress EG. what question, also it should take as parameter an array of images
function loadGraphics(timer,backgroundImage1,question,questionNumber) {
	//calls the functions for rendering the game
	clearCanvas();
	drawBackground();
	drawBoxes();
	drawStatusBar();
	drawPhase();
	drawText();

	function clearCanvas() {
    	context.clearRect(0, 0, 720, 480); // clear canvas
  	}

	//text to boxes
	function drawText(){
		context.font = "bold 30px 'Electrolize'";
		context.fillStyle="black";
		context.textAlign="center";
		context.fillText(question.Kysymys,360,150);
		context.fillText(question.A,205,290);
		context.fillText(question.B,515,290);
		context.fillText(question.C,205,410);
		context.fillText(question.D,515,410);
	}
	
	function drawBoxes(){
		//questionBox
		drawRoundRect(60,60,600,160,10);
		drawAnswerboxes();
	}

	//draws the small boxes containing the answers
	function drawAnswerboxes(){
		drawRoundRect(60,240,290,100,10);
		drawRoundRect(370,240,290,100,10);
		drawRoundRect(60,360,290,100,10);
		drawRoundRect(370,360,290,100,10);
	}

	function drawRoundRect(x, y, width, height, cornerRadius){
		context.beginPath();
		context.moveTo(x+cornerRadius,y);
		context.lineTo(x+width-cornerRadius, y);
		context.arcTo(x+width,y,x+width,y+cornerRadius, cornerRadius);
		context.lineTo(x+width,y+height-cornerRadius);
		context.arcTo(x+width, y+height,x+width-cornerRadius, y+height, cornerRadius);
		context.lineTo(x+cornerRadius,y+height);
		context.arcTo(x, y+height, x, y+height-cornerRadius, cornerRadius);
		context.lineTo(x, y+cornerRadius);
		context.arcTo(x, y, x+cornerRadius,y, cornerRadius);
		//opacity
		context.fillStyle= "rgba(255, 255, 255, 0.7)";
		context.stroke();
		context.fill();
		context.closePath();	
	}

	//what question EG. 1/12
	function drawPhase(){
		context.font = "bold 30px 'Electrolize'";
		context.fillStyle="white";
		context.fillText(questionNumber+"/12",610,40);
	}

	//encapsulates the time-left bar
	function drawStatusBar(){
		drawBar();
		context.rect(60,15,360,30);
		//context.stroke();
	}

	function drawBar(){
		//time in seconds
		var adjustedTime=timer/100;
		//depending on the time left different color on bar
		if(adjustedTime<90){ context.fillStyle="#00CC00";}
		if((adjustedTime>90) && (adjustedTime<180)){ context.fillStyle="#66CC00";}
		if((adjustedTime>180) && (adjustedTime<270)){ context.fillStyle="#CCCC00";}
		if((adjustedTime>270) && (adjustedTime<360)){ context.fillStyle="#CC0000";}
		
		if(adjustedTime<360){
			context.fillRect(60,16,360-timer/100,28);
		}
	}
	//draws the backgroundImage
	function drawBackground(){
		context.drawImage(backgroundImage1,0,0,720,480);
	}

}

//loads the images (only once)
function loadImages(){
		var backgroundImage1 = new Image();
	  	backgroundImage1.src = 'images/mopojengi.png';
	  	return backgroundImage1;
}
