function runGame(backgroundImage1,questions){

	//reacts on mouseclicks
	listenToMouse();
	var currentquestion;
	var questionIndex=0;

	requestAnimationFrame(gameLoop);

	function updateGameState(){
		currentquestion=questions[questionIndex];
	}

	function gameLoop(time) {
		updateGameState();
    	loadGraphics(time,backgroundImage1,currentquestion);
    	requestAnimationFrame(gameLoop);
  	}

  	function listenToMouse(){
	document.addEventListener("mousedown",function(e){
	    var pos=getMousePos(e);
	    if((pos.X>60 && pos.X<300) && (pos.Y>240 && pos.Y<340)){
			questionIndex++;
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