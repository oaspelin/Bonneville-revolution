

var canvas = null;
var context = null;

window.onload = initCanvas;

function initCanvas() {
  
  canvas = document.querySelector("canvas");
  context = canvas.getContext( "2d" );
  
  canvas.width = 720;
  canvas.height = 480;

  var contextIsSupported = context !== null;


  //loads the background Images
  
  var questions=generateQuestions();
  var images=loadImages(questions);

  //starts the game
  runGame(images,questions);
}


