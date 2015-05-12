

var canvas = null;
var context = null;

window.onload = initCanvas;

function initCanvas() {

  canvas = document.querySelector("canvas");
  context = canvas.getContext( "2d" );
  CanvasText = new CanvasText;
  CanvasText.config({
    canvas: canvas,
    context: context,
    fontFamily: "Special Elite",
    fontSize: "17px",
    fontWeight: "normal",
    fontColor: "#000",
    lineHeight: "20"
  });
  
  canvas.width = 720;
  canvas.height = 480;

  var contextIsSupported = context !== null;


  //loads the background Images
  
  var questions=generateQuestions();
  var images=loadImages(questions);
  var audio = new Audio('sounds/Bike.wav');
  audio.play();
  highscores=loadHighscores();

  //starts the game
  runGame(images,questions, highscores);

}





