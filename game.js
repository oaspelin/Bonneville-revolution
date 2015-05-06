function runGame(images,questions,highscores){

	//reacts on mouseclicks
	listenToMouse();
	var currentquestion;
	var questionIndex=1;
	var timer= Date.now();
	var delta;
	var count=0;
	var mousepos={X:0,Y:0};
	var answerLocation;
	var boxLocation;

  	var currentgamestate={Name:"menu", count:0};

	//needed for the timer bar
	function updateDelta() {
    	var now = Date.now();
    	delta=now-timer;
  	}

	requestAnimationFrame(gameLoop);

	function updateGameState(){
		count++;
		updateDelta();
		currentquestion=questions[Math.min(questionIndex,11)];
		if (timer > 30000) {
			quitGame();
		}
	}

	function gameLoop(time) {
		updateGameState();
    	answerLocation=loadGraphics(delta,images,currentquestion,Math.min(questionIndex,12), currentgamestate,count,mousepos,highscores);
    	requestAnimationFrame(gameLoop);
  	}

  	function listenToMouse(){
  		document.addEventListener("mousemove",function(e){
  			var pos=getMousePos(e);
  			mousepos=pos;
  		});

		document.addEventListener("mousedown",function(e){
		    var pos=getMousePos(e);

		    //Game events
		    //upper right box
		    if(currentgamestate.Name=="game"){
			    if((pos.X>60 && pos.X<300) && (pos.Y>240 && pos.Y<340)){  // tarkista vastaus
					if (answerLocation==1) {
						questionIndex++;
						timer=Date.now();
					}
					else{
						console.log("Loose");
					}
				}

				//upper left
				if((pos.X>370 && pos.X<540) && (pos.Y>240 && pos.Y<340)){
					if (answerLocation==2) {
						questionIndex++;
						timer=Date.now();
					}
					else{
						console.log("Loose");
					}
				}
				//down right
				if((pos.X>60 && pos.X<300) && (pos.Y>360 && pos.Y<460)){
					if (answerLocation==3) {
						questionIndex++;
						timer=Date.now();
					}
					else{
						console.log("Loose");
					}
				}
				//down left
			    if((pos.X>370 && pos.X<540) && (pos.Y>360 && pos.Y<460)){
					if (answerLocation==4) {
						questionIndex++;
						timer=Date.now();
					}
					else{
						console.log("Loose");
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

	function quitGame() {

	}

}