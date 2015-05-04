function runGame(images,questions){

	//reacts on mouseclicks
	listenToMouse();
	var currentquestion;
	var questionIndex=1;
	var timer= Date.now();
	var delta;
	var count=0;
	var mousepos={X:0,Y:0};

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
	}

	function gameLoop(time) {
		updateGameState();
    	answerLocation=loadGraphics(delta,images,currentquestion,Math.min(questionIndex,12), currentgamestate,count,mousepos);
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
			    if((pos.X>60 && pos.X<300) && (pos.Y>240 && pos.Y<340)){
					questionIndex++;
					timer=Date.now();
				}
				//upper left
				if((pos.X>370 && pos.X<540) && (pos.Y>240 && pos.Y<340)){
					questionIndex++;
					timer=Date.now();
				}
				//down right
				if((pos.X>60 && pos.X<300) && (pos.Y>360 && pos.Y<460)){
					questionIndex++;
					timer=Date.now();
				}
				//down left
			    if((pos.X>370 && pos.X<540) && (pos.Y>360 && pos.Y<460)){
					questionIndex++;
					timer=Date.now();
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
					console.log("instructions");
				}
				//highscores
				if((pos.X>185 && pos.X<535) && (pos.Y>350 && pos.Y<430)){
					//gamestate =>highscores
					console.log("highscores");
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