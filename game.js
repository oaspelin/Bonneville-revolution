function runGame(images,questions){

	//reacts on mouseclicks
	listenToMouse();
	var currentquestion;
	var questionIndex=0;
	var timer= Date.now();
	var delta;

	var gamestate={Name:"menu", count:0};
	
	
	//needed for the timer bar
	function updateDelta() {
    	var now = Date.now();
    	delta=now-timer;
  	}

	requestAnimationFrame(gameLoop);

	function updateGameState(){
		gamestate.count++;
		updateDelta();
		currentquestion=questions[Math.min(questionIndex,11)];
	}

	function gameLoop(time) {
		updateGameState();
    	loadGraphics(delta,images,currentquestion,Math.min(questionIndex+1,12), gamestate);
    	requestAnimationFrame(gameLoop);
  	}

  	function listenToMouse(){
		document.addEventListener("mousedown",function(e){
		    var pos=getMousePos(e);
		    //upper right box
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