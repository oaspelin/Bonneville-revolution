function runGame(images,questions,highscores){

	//audio when started
	var audio = new Audio('sounds/Bike.wav');
	audio.play();
	
	//reacts on mouseclicks
	listenToMouse();
	var currentquestion;
	var questionIndex;
	var timer= Date.now();
	var delta;
	var count=0;
	var mousepos={X:0,Y:0};
	var points;
	var correctAudio= new Audio('sounds/Blopp.mp3');
	var wrongAudio= new Audio('sounds/Buzz.wav');
	var answerOrder;
	var boxClicked=0;

	//game starts from menu
	var currentgamestate={Name:"menu", count1:0, count2:0};

	//some variables initiated that needs to be re-assigned during the game
	function initvariables(){
		questionIndex=0;
		points=0;
		//currentquestion=questions[Math.min(questionIndex,11)];
		answerOrder=generateOrder();
	}
  	
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

		if (currentgamestate.Name=="transition" && delta>2000) {
			questionIndex++;
			answerOrder=generateOrder();
			currentgamestate.Name="game";
		}

		if(currentgamestate.Name=="game" && delta>30000){
			currentgamestate.Name="loose";
		}

		currentquestion=questions[Math.min(questionIndex,11)];
	}

	function gameLoop(time) {
		updateGameState();
    	loadGraphics(delta,images,currentquestion,Math.min(questionIndex+1,12), currentgamestate,count,mousepos,highscores,points,answerOrder,boxClicked);
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
  		questions=generateQuestions();
  		initvariables();
  		//different background image depending on the question, thats why images are loaded again
  		images=loadImages(questions);
  		timer=Date.now();
  	}

  	//shuffels the question answers
	function generateOrder(){
		answers=null;
		//array of the answers
		var answers=[questions[questionIndex].A,
					questions[questionIndex].B,
					questions[questionIndex].C,
					questions[questionIndex].D];		
		//shuffels the array			
		answers=shuffle(answers);
		//pushes the index of the right answer to the end of the array
		answers.push(answers.indexOf(questions[questionIndex].A));
		return answers;		
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
			    if((pos.X>100 && pos.X<350) && (pos.Y>225 && pos.Y<305)){ 
					if (answerOrder[4]==0) {
						points+=currentquestion.vaikeusaste;
						correctAudio.play();
						if(questionIndex==11){
							currentgamestate.Name="win";
						}
						else{
							currentgamestate.Name="transition";
						}
					}
					else{
						boxClicked=0;
						wrongAudio.play(); 
						currentgamestate.Name="loose";
					}
					timer=Date.now();
				}

				//upper right boc
				if((pos.X>370 && pos.X<620) && (pos.Y>225 && pos.Y<305)){
					if (answerOrder[4]==1) {
						points+=currentquestion.vaikeusaste;
						correctAudio.play();
						if(questionIndex==11){
							currentgamestate.Name="win";
						}
						else{
							currentgamestate.Name="transition";
						}
					}
					else{
						wrongAudio.play(); 
						currentgamestate.Name="loose";
					}
					timer=Date.now();
					boxClicked=1;
				}
				//down left
				if((pos.X>100 && pos.X<350) && (pos.Y>360 && pos.Y<460)){
					if (answerOrder[4]==2) {
						points+=currentquestion.vaikeusaste;
						correctAudio.play();
						if(questionIndex==11){
							currentgamestate.Name="win";
						}
						else{
							currentgamestate.Name="transition";
						}
					}
					else{
						wrongAudio.play(); 
						currentgamestate.Name="loose";
					}
					timer=Date.now();
					boxClicked=2;
				}
				//down right
			    if((pos.X>370 && pos.X<620) && (pos.Y>360 && pos.Y<460)){
					if (answerOrder[4]==3) {
						points+=currentquestion.vaikeusaste;
						correctAudio.play();
						if(questionIndex==11){
							currentgamestate.Name="win";
						}
						else{
							currentgamestate.Name="transition";
						}
					}
					else{
						wrongAudio.play(); 
						currentgamestate.Name="loose";
					}
					timer=Date.now();
					boxClicked=3;
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