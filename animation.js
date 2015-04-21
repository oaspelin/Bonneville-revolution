
//this function needs additional parameters when we progress EG. what question, also it should take as parameter an array of images
function loadGraphics(time,backgroundImage1) {

	//calls the functions for rendering the game
	drawBackground();
	drawStatusBar();
	drawBoxes();
	drawPhase();
	
	function drawBoxes(){
		//opacity
		context.fillStyle= "rgba(255, 255, 255, 0.7)";
		context.fillRect(60,60,600,160);
		drawAnswerboxes();
		context.stroke();
	}

	//draws the small boxes containing the answers
	function drawAnswerboxes(){
		context.fillRect(60,240,290,100);
		context.fillRect(370,240,290,100);
		context.fillRect(60,360,290,100);
		context.fillRect(370,360,290,100);
	}

	//what question EG. 1/12
	function drawPhase(){
		context.font = "bold 30px 'Electrolize'";
		context.fillStyle="black";
		context.fillText("1/10",610,40);
	}

	//encapsulates the time-left bar
	function drawStatusBar(){
		drawBar();
		context.rect(60,15,360,30);
		context.stroke();
	}

	function drawBar(){
		//time in seconds
		var adjustedTime=time/100;
		//depending on the time left different color on bar
		if(adjustedTime<90){ context.fillStyle="#00CC00";}
		if((adjustedTime>90) && (adjustedTime<180)){ context.fillStyle="#66CC00";}
		if((adjustedTime>180) && (adjustedTime<270)){ context.fillStyle="#CCCC00";}
		if((adjustedTime>270) && (adjustedTime<360)){ context.fillStyle="#CC0000";}
		
		if(adjustedTime<369){
		context.fillRect(60,16,360-time/100,28);
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
