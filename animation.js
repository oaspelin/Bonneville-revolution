
//this function needs additional parameters when we progress EG. what question, also it should take as parameter an array of images
function loadGraphics(timer,images,question,questionNumber, gamestate,count,mousepos,highscores,points) {
	//calls the functions for rendering the game
	var answerLocation;
	clearCanvas();
	if(gamestate.Name=="game"){
		drawBackground();
		drawBoxes();
		drawStatusBar();
		drawPhase();
		drawText();
	}

	//You loose screen
	if(gamestate.Name=="loose"){
		context.drawImage(images[0], gamestate.count*500,0, 500,333, 0, 0, 720,480);
		if(count%9==0){
			gamestate.count=(gamestate.count+1)%4;
		}
		context.font = "bold 70px 'Special Elite'";
		context.textAlign="center";
		context.fillText("Hävisit",360,210,550);
		context.font= "bold 50px 'Special Elite'";
		context.fillText("Sait:"+points+" pistettä",360,300,550);

		if(checkmousepos(210,380,300,80)){
			drawRoundRect(210-10,380-10,320,100,10);
		}
		else{
			drawRoundRect(210,380,300,80,10);
		}
		context.fillStyle="black";
		context.fillText("Check Highscores", 360,435,220);
	}

	//the menu
	if(gamestate.Name=="menu"){
		context.drawImage(images[0], gamestate.count*500,0, 500,333, 0, 0, 720,480);
		if(count%9==0){
			gamestate.count=(gamestate.count+1)%4;
		}
		//Nämä pienempiä
		for(i=0; i<3;i++){
			if(checkmousepos(225,150+100*i,270,80)){
				drawRoundRect(225-10,150+100*i-10,290,100,10);
			}
			else{
				drawRoundRect(225,150+100*i,270,80,10);
			}
		}
		context.font = "bold 70px 'Special Elite'";
		context.fillStyle="black";
		context.textAlign="center";
		context.fillText("Bonneville Revolution",360,70,550);
		context.font = "bold 50px 'Special Elite";
		context.fillText("Tietovisa",360, 120,350);
		context.fillText("Pelaa", 360,200,150);
		context.fillText("Ohjeet", 360,300 ,150);
		context.fillText("Ennätykset", 360, 400,150);
	}

	//1. Pelle: 1000
	//5 parhainta
	if(gamestate.Name=="highscores"){
		context.drawImage(images[0], gamestate.count*500,0, 500,333, 0, 0, 720,480);
		if(count%9==0){
			gamestate.count=(gamestate.count+1)%4;
		}
		drawRoundRect(160,80,400,280,10);
		if(checkmousepos(210,380,300,80)){
			drawRoundRect(210-10,380-10,320,100,10);
		}
		else{
			drawRoundRect(210,380,300,80,10);
		}
		context.font="bold 50px 'Special Elite'";
		context.fillStyle="black";
		context.textAlign="center";
		context.fillText("Highscores",360,60,400);
		context.fillText("Back to Menu", 360,435,220);
		context.font="30px 'Special Elite'";
		context.textAlign="start";
		for(i=0; i<3; i++){
			context.fillText(i+1+". "+highscores[i].name+": "+highscores[i].score, 220, 120+30*i, 300);
		}
	}

	if(gamestate.Name=="instructions"){
		context.drawImage(images[0], gamestate.count*500,0, 500,333, 0, 0, 720,480);
		if(count%9==0){
			gamestate.count=(gamestate.count+1)%4;
		}
		drawRoundRect(30,70,660,290,10);
		if(checkmousepos(210,380,300,80)){
			drawRoundRect(210-10,380-10,320,100,10);
		}
		else{
			drawRoundRect(210,380,300,80,10);
		}
		context.font="bold 50px 'Special Elite'";
		context.fillStyle="black";
		context.textAlign="center";
		context.fillText("Ohjeet",360,60,400);
		context.fillText("Back to Menu", 360,435,220);
		CanvasText.drawText({
			text:"Tervetuloa osallistumaan Triumph Bonneville Revolution tietovisaan! Vastaamalla oikein kaikkiin kysymyksiinn, voit voittaa moottoripyöräsafarin Euroopassa. Safariin sisältyy vierailu Triumphin tehtailla. <br/> Kysymyksiä on kaksitoista kappaletta ja ne vaikenevat loppua kohti. Jokaiseen kysymykseen on neljä vastausvaihtoehtoa joista yksi on oikea, valitsemalla väärän vastauksen peli loppuu. Kysymyksiin pitää vastata 30 sekunnin kuluessa, ajan loputtua peli katkeaa.<br/>Vastattuanne oikein kaikkiin kysymyksiin oikein, keräämme yhteystietonne mahdollista palkintoa varten. Palkintoja arvotaan kymmenen kappaletta kaikkien oikein vastanneiden kesken. Peliin voivat osallistua ainoastaan valtuutetut Triumph-myyjät.               Onnea peliin!" ,
			x: 40,
			y: 90,
			boxWidth: 650
		});
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
		//randomilla kysymykset
		context.fillText(question.A,205,300,260);
		answerLocation=1;

		context.fillText(question.B,515,300,260);
		context.fillText(question.C,205,420,260);
		context.fillText(question.D,515,420,260);
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
		context.drawImage(images[questionNumber],0,0,720,480);
	}
	return answerLocation;
}

//loads the images (only once)
function loadImages(questions){
	var images=[];

	var gifImage= new Image();
	gifImage.src= 'images/GIFtest.png';
	images.push(gifImage);

	var backgroundImage1 = new Image();
	backgroundImage1.src=questions[0].kuva;
	images.push(backgroundImage1);
	var backgroundImage2 = new Image();
	backgroundImage2.src=questions[1].kuva;
	images.push(backgroundImage2);
	var backgroundImage3 = new Image();
	backgroundImage3.src=questions[2].kuva;
	images.push(backgroundImage3);
	var backgroundImage4 = new Image();
	backgroundImage4.src=questions[3].kuva;
	images.push(backgroundImage4);
	var backgroundImage5 = new Image();
	backgroundImage5.src=questions[4].kuva;
	images.push(backgroundImage5);
	var backgroundImage6 = new Image();
	backgroundImage6.src=questions[5].kuva;
	images.push(backgroundImage6);
	var backgroundImage7 = new Image();
	backgroundImage7.src=questions[6].kuva;
	images.push(backgroundImage7);
	var backgroundImage8 = new Image();
	backgroundImage8.src=questions[7].kuva;
	images.push(backgroundImage8);
	var backgroundImage9 = new Image();
	backgroundImage9.src=questions[8].kuva;
	images.push(backgroundImage9);
	var backgroundImage10 = new Image();
	backgroundImage10.src=questions[9].kuva;
	images.push(backgroundImage10);
	var backgroundImage11 = new Image();
	backgroundImage11.src=questions[10].kuva;
	images.push(backgroundImage11);
	var backgroundImage12 = new Image();
	backgroundImage12.src=questions[11].kuva;
	images.push(backgroundImage12);

	return images;
}
