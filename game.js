function runGame(backgroundImage1){

	//reacts on mouseclicks
	listenToMouse();
	requestAnimationFrame(gameLoop);
	function gameLoop(time) {
    	loadGraphics(time,backgroundImage1);
    	requestAnimationFrame(gameLoop);
  }

}