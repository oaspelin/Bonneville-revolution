
//this function needs additional parameters when we progress EG. what question, also it should take as parameter an array of images
function loadGraphics(timer,images,question,questionNumber, gamestate,count,mousepos) {
	//calls the functions for rendering the game
	clearCanvas();
	if(gamestate.Name=="game"){
		drawBackground();
		drawBoxes();
		drawStatusBar();
		drawPhase();
		drawText();
	}

	//the menu
	if(gamestate.Name=="menu"){
		context.drawImage(images[1], gamestate.count*500,0, 500,333, 0, 0, 720,480);
		if(count%7==0){
			gamestate.count=(gamestate.count+1)%4;
		}
		for(i=0; i<3;i++){
			if(checkmousepos(185,150+100*i,350,80)){
				drawRoundRect(185-10,150+100*i-10,370,100,10);
			}
			else{
				drawRoundRect(185,150+100*i,350,80,10);
			}
		}
		context.font = "bold 50px 'Electrolize'";
		context.fillStyle="black";
		context.textAlign="center";
		context.fillText("Bonnevillle Revolution",360,50,350);
		context.fillText("Quizmaster",360, 100,350);
		context.fillText("Play Game", 360,200,80);
		context.fillText("Instructions", 360,300 ,80);
		context.fillText("Highscores", 360, 400,80);
	}

	function checkmousepos(x,y, width, height){
		if((mousepos.X>x && mousepos.X< x+width) && (mousepos.Y>y && mousepos.Y< y+height)){
			return true;
		}
		else{
			return false;
		}
	}

	function clearCanvas() {
    	context.clearRect(0, 0, 720, 480); // clear canvas
  	}

	//text to boxes
	function drawText(){
		context.font = "bold 30px 'Electrolize'";
		context.fillStyle="black";
		context.textAlign="center";
		context.fillText(question.Kysymys,360,150,580);
		context.fillText(question.A,205,290,260);
		context.fillText(question.B,515,290,260);
		context.fillText(question.C,205,410,260);
		context.fillText(question.D,515,410,260);
	}
	
	function drawBoxes(){
		//questionBox
		drawRoundRect(60,60,600,160,10);
		drawAnswerboxes();
	}

	//draws the small boxes containing the answers
	function drawAnswerboxes(){
		if(checkmousepos(60,240,290,100)){
			drawRoundRect(60-10,240-10,290+20,100+20,10);
		}
		else{
			drawRoundRect(60,240,290,100,10);
		}
		if(checkmousepos(370,240,290,100)){
			drawRoundRect(370-10,240-10,290+20,100+20,10);
		}
		else{
			drawRoundRect(370,240,290,100,10);
		}
		if(checkmousepos(60,360,290,100)){
			drawRoundRect(60-10,360-10,290+20,100+20,10);
		}
		else{
			drawRoundRect(60,360,290,100,10);
		}
		if(checkmousepos(370,360,290,100)){
			drawRoundRect(370-10,360-10,290+20,100+20,10);
		}
		else{
			drawRoundRect(370,360,290,100,10);
		}
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
		context.drawImage(images[0],0,0,720,480);
	}
}

//loads the images (only once)
function loadImages(){
	var images=[];
	var backgroundImage1 = new Image();
	backgroundImage1.src = 'images/mopojengi.png';
	images.push(backgroundImage1);
	var gifImage= new Image();
	gifImage.src= 'images/GIFtest.png';
	images.push(gifImage);

	return images;
}
