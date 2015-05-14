function runGame(images,questions,highscores){

	//reacts on mouseclicks
	listenToMouse();
	var currentquestion;
	var questionIndex;
	var timer= Date.now();
	var delta;
	var count=0;
	var mousepos={X:0,Y:0};
	var answerLocation;
	var points;
	var correctAudio= new Audio('sounds/Blopp.mp3');
	var wrongAudio= new Audio('sounds/Buzz.wav');

	function initvariables(){
		questionIndex=0;
		points=0;
	}


  	var currentgamestate={Name:"menu", count1:0, count2:0};

	//needed for the timer bar
	function updateDelta() {
    	var now = Date.now();
    	delta=now-timer;
  	}

  	initvariables();
	requestAnimationFrame(gameLoop);

	function updateGameState(){
		count++;
		updateDelta();
		currentquestion=questions[Math.min(questionIndex,11)];

		if (currentgamestate.Name=="transition" && delta>2000) {
			currentgamestate.Name="game";
			timer=Date.now();
			questionIndex++;
		}

		if(currentgamestate.Name=="game" && delta>30000){
			currentgamestate.Name="loose";
		}
	}

	function gameLoop(time) {
		updateGameState();
    	answerLocation=loadGraphics(delta,images,currentquestion,Math.min(questionIndex+1,12), currentgamestate,count,mousepos,highscores,points);
    	requestAnimationFrame(gameLoop);
  	}

  	//asks for player name for highscorescores
  	function askforName(){
  		var person = prompt("Please enter your name", "");
  		if(person==null){
  			person="Unknown biker";
  		}
  		handleHighscores(person,points,highscores);
  	}

  	//if player looses, loads new questions and resets some variables
  	function resetGame(){
  		initvariables();
  		questions=generateQuestions();
  		//different background image depending on the question, thats why images are loaded again
  		images=loadImages(questions);
  		timer=Date.now();
  	}

  	function listenToMouse(){
  		document.addEventListener("mousemove",function(e){
  			var pos=getMousePos(e);
  			mousepos=pos;
  		});

		document.addEventListener("mousedown",function(e){
		    var pos=getMousePos(e);

		    //Game events
		    //upper left box
		    if(currentgamestate.Name=="game"){
			    if((pos.X>100 && pos.X<350) && (pos.Y>225 && pos.Y<305)){  // tarkista vastaus
					if (answerLocation==1) {
						points+=currentquestion.vaikeusaste;
						correctAudio.play();
						if(questionIndex==11){
							currentgamestate.Name="win";
						}
						else{
							currentgamestate.Name="transition";
						}
						timer=Date.now();
					}
					else{
						wrongAudio.play(); 
						currentgamestate.Name="loose";
					}
				}

				//upper right boc
				if((pos.X>370 && pos.X<620) && (pos.Y>225 && pos.Y<305)){
					if (answerLocation==2) {
						points+=currentquestion.vaikeusaste;
						correctAudio.play();
						if(questionIndex==11){
							currentgamestate.Name="win";
						}
						else{
							currentgamestate.Name="transition";
						}
						timer=Date.now();
					}
					else{
						//wrongAudio.play(); 
						currentgamestate.Name="loose";
					}
				}
				//down left
				if((pos.X>100 && pos.X<350) && (pos.Y>360 && pos.Y<460)){
					if (answerLocation==3) {
						points+=currentquestion.vaikeusaste;
						correctAudio.play();
						if(questionIndex==11){
							currentgamestate.Name="win";
						}
						else{
							currentgamestate.Name="transition";
						}
						timer=Date.now();
					}
					else{
						wrongAudio.play(); 
						currentgamestate.Name="loose";
					}
				}
				//down right
			    if((pos.X>370 && pos.X<620) && (pos.Y>360 && pos.Y<460)){
					if (answerLocation==4) {
						points+=currentquestion.vaikeusaste;
						correctAudio.play();
						if(questionIndex==11){
							currentgamestate.Name="win";
						}
						else{
							currentgamestate.Name="transition";
						}
						timer=Date.now();
					}
					else{
						wrongAudio.play(); 
						currentgamestate.Name="loose";
					}
				}
			}

			//menu events
			if(currentgamestate.Name=="menu"){
				if((pos.X>185 && pos.X<535) && (pos.Y>150 && pos.Y<230)){
					//play game
					currentgamestate.Name="game";
					timer=Date.now();
				}
				//instructions
				if((pos.X>185 && pos.X<535) && (pos.Y>250 && pos.Y<330)){
					//gamestate =>instructions
					currentgamestate.Name="instructions";
				}
				//highscores
				if((pos.X>185 && pos.X<535) && (pos.Y>350 && pos.Y<430)){
					console.log("highscores");
					currentgamestate.Name="highscores";
				}
			}

			//highscore events
			if(currentgamestate.Name=="highscores"){
				if((pos.X>210 && pos.X<510) && (pos.Y>380 && pos.Y<460)){
					//back to menu
					currentgamestate.Name="menu";
				}
			}

			//instructions events
			if(currentgamestate.Name=="instructions"){
				if((pos.X>210 && pos.X<510) && (pos.Y>380 && pos.Y<460)){
					//back to menu
					currentgamestate.Name="menu";
				}
			}

			//Loose events
			if(currentgamestate.Name=="loose" || currentgamestate.Name=="win"){
				if((pos.X>210 && pos.X<510) && (pos.Y>380 && pos.Y<460)){
					currentgamestate.Name="highscores";
					//Check highscores
					askforName();
					resetGame();
				}
			}
		});

		//converts the page coordinates to canvas coordinates
		function getMousePos(event) {
		    var rect = canvas.getBoundingClientRect();
		    x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		    y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		    return {
		        X: x - rect.left,
		        Y: y - rect.top
		    };
		}
	}

}