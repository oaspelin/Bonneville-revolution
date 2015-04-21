function runGame(backgroundImage1){


	listenToMouse();

	//var now, delta;
	//var then = new Date().getTime();
	//var timer= new Date().getTime();

	/*function move() {
		now = new Date().getTime();
		delta = now - then;
		updateState();
		loadGraphics(timer);
		then = now;
	}*/

	requestAnimationFrame(gameLoop);
	function gameLoop(time) {
    	//updateState(time);
    	loadGraphics(time,backgroundImage1);
    	requestAnimationFrame(gameLoop);
  }

}