function runGame(backgroundImage1,questions){

	//reacts on mouseclicks
	listenToMouse();
	requestAnimationFrame(gameLoop);
	var currentquestion=questions[0];
	function gameLoop(time) {
    	loadGraphics(time,backgroundImage1,currentquestion);
    	requestAnimationFrame(gameLoop);
  }

}