
//this function needs additional parameters when we progress EG. what question, also it should take as parameter an array of images
function loadGraphics(timer,images,question,questionNumber, gamestate,count,mousepos,highscores,points) {
	//calls the functions for rendering the game
	var answerLocation;
	clearCanvas();
	if(gamestate.Name=="game"){
		drawBackground();
		drawQuestionBox();
		drawresponsiveAnswerboxes();
		drawBar();
		drawPhase();
		drawText();
	}

	function drawGif(){
		/*context.drawImage(images[0], gamestate.count1*720, gamestate.count2*405, 718,405, 0, 0, 720,480);
		if(count%5==0){
				if(gamestate.count1==10){
					gamestate.count2=(gamestate.count2+1)%18;
				}
				gamestate.count1=(gamestate.count1+1)%11;
		}*/
		context.drawImage(images[0], gamestate.count1*360, gamestate.count2*202.5,360,202.5, 0, 0, 720,480);
		if(count%5==0){
				if(gamestate.count1==10){
					gamestate.count2=(gamestate.count2+1)%18;
				}
				gamestate.count1=(gamestate.count1+1)%11;
		}
	}
	//You loose screen
	if(gamestate.Name=="loose" || gamestate.Name=="win"){
		if(timer>3000){
			drawGif();
			context.font = "bold 70px 'Special Elite'";
			context.textAlign="center";
			if(gamestate.Name=="loose"){
				context.fillText("Hävisit",360,150,550);
			}
			else{
				context.fillText("Vastasit oikein jokaiseen kysymykseen!",360,150,550);
			}
			context.font= "bold 50px 'Special Elite'";
			context.fillText("Sait: "+points+" pistettä",360,240,550);

			if(checkmousepos(210,380,300,80)){
				drawRoundRect(210-10,380-10,320,100,10);
			}
			else{
				drawRoundRect(210,380,300,80,10);
			}

			context.fillStyle="black";
			context.fillText("Check Highscores", 360,435,220);
		}
		else{
			drawBackground();
			drawQuestionBox();
			drawAnswerboxes();
			drawPhase();
			drawText();
			if(count%10>0 && count%10>5){
				drawRoundRect(100,225,250,80,10);
				context.fillStyle= "rgba(0, 153, 0, 0.7)";
				context.fill();
			}
			drawRoundRect(370,225,250,80,10);
			context.fillStyle= "rgba(153, 0, 0, 0.7)";
			context.fill();
		}
	}

	if(gamestate.Name=="win"){
		if(timer>3000){
			drawGif();
			context.font = "bold 70px 'Special Elite'";
			context.textAlign="center";
			context.fillText("Vastasit oikein jokaiseen kysymykseen!",360,150,550);
			context.font= "bold 50px 'Special Elite'";
			context.fillText("Sait: "+points+" pistettä",360,240,550);
			if(checkmousepos(210,380,300,80)){
				drawRoundRect(210-10,380-10,320,100,10);
			}
			else{
				drawRoundRect(210,380,300,80,10);
			}
			context.fillStyle="black";
			context.fillText("Check Highscores", 360,435,220);
		}
	}
	//transition between slides
	if(gamestate.Name=="transition"){
		drawBackground();
		drawQuestionBox();
		drawAnswerboxes();
		drawPhase();
		drawText();
			drawRoundRect(100,225,250,80,10);
			context.fillStyle= "rgba(0, 153, 0, 0.6)";
			context.fill();
	}

	//the menu
	if(gamestate.Name=="menu"){
		drawGif();

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

	if(gamestate.Name=="highscores"){
		drawGif();
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
		for(i=0; i<10; i++){
			context.fillText(i+1+". "+highscores[i].name+": "+highscores[i].score, 220, 120+25*i, 300);
		}
	}

	if(gamestate.Name=="instructions"){
		drawGif();
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

	//text to answeboxes
	function drawText(){
		CanvasText.drawText({
			text: '<class="answer">'+question.A+'</class>',
			x: 110,
			y: 260,
			boxWidth: 240
		});
		CanvasText.drawText({
			text: '<class="answer">'+question.B+'</class>',
			x: 380,
			y: 260,
			boxWidth: 240
		});
		CanvasText.drawText({
			text: '<class="answer">'+question.C+'</class>',
			x: 110,
			y: 360,
			boxWidth: 240
		});
		CanvasText.drawText({
			text: '<class="answer">'+question.D+'</class>',
			x: 380,
			y: 360,
			boxWidth: 240
		});
		answerLocation=1;
	}
	
	function drawQuestionBox(){
		//questionBox
		drawRoundRect(100,75,520,130,10);
		CanvasText.drawText({
			text: '<class="question">'+question.Kysymys+'</class>',
			x:120,
			y:120,
			boxWidth: 500
		});
	}

	//draws the small boxes containing the answers, makes them bigger if mouse is over a box
	function drawresponsiveAnswerboxes(){
		if(checkmousepos(100,225,250,80)){
			drawRoundRect(100-10,225-10,250+20,80+20,10);
		}
		else{
			drawRoundRect(100,225,250,80,10);
		}
		if(checkmousepos(370,225,250,80)){
			drawRoundRect(370-10,225-10,250+20,80+20,10);
		}
		else{
			drawRoundRect(370,225,250,80,10);
		}
		if(checkmousepos(100,325,250,80)){
			drawRoundRect(100-10,325-10,250+20,80+20,10);
		}
		else{
			drawRoundRect(100,325,250,80,10);
		}
		if(checkmousepos(370,325,250,80)){
			drawRoundRect(370-10,325-10,250+20,80+20,10);
		}
		else{
			drawRoundRect(370,325,250,80,10);
		}
	}

	//draws the small boxes that doesn't react on mouseover
	function drawAnswerboxes(){
		drawRoundRect(100,225,250,80,10);
		drawRoundRect(370,225,250,80,10);
		drawRoundRect(100,325,250,80,10);
		drawRoundRect(370,325,250,80,10);
	}

	//a rectangel with round corners
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
		context.fillStyle= "rgba(255, 255, 255, 0.3)";
		context.stroke();
		context.fill();
		context.closePath();	
	}

	//what question EG. 1/12
	function drawPhase(){
		context.font = "bold 30px 'Special Elite'";
		context.fillStyle="white";
		context.fillText(questionNumber+"/12",580,55);
	}

	//timebar
	function drawBar(){
		//time in seconds
		var adjustedTime=timer/100;
		//depending on the time left different color on bar
		if(adjustedTime<75){ context.fillStyle="#00CC00";}
		if((adjustedTime>75) && (adjustedTime<150)){ context.fillStyle="#66CC00";}
		if((adjustedTime>150) && (adjustedTime<225)){ context.fillStyle="#CCCC00";}
		if((adjustedTime>225) && (adjustedTime<300)){ context.fillStyle="#CC0000";}
		
		if(adjustedTime<300){
			context.fillRect(100,30,300-timer/100,30);
		}
	}

	//draws the backgroundImage
	function drawBackground(){
		context.drawImage(images[questionNumber],0,0,720,480);
	}

	//Some CanvasText classes defined
	CanvasText.defineClass("question",{
	    fontSize: "25px",
	    fontColor: "#FF",
	    fontFamily: "Special Elite",
	    fontWeight: "bold",
	});
	CanvasText.defineClass("answer",{
	    fontSize: "20px",
	    fontColor: "#FF",
	    fontFamily: "Special Elite",
	    fontWeight: "bold",

	});


	return answerLocation;
}

//loads the images (only once)
function loadImages(questions){
	var images=[];

	var gifImage= new Image();
	gifImage.src= 'images/sprite_sheet2.png';
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
