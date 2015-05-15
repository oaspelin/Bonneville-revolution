

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

  //loading screen, because some of our files are quite large
  context.fillStyle="black";
  context.fillRect(0, 0, 720, 480);
  var loading= setInterval(function(){
    context.fillStyle="white"
    context.font = "bold 70px 'Special Elite'";
    context.textAlign="center";
    context.fillText("Loading...", 360, 240);
  }, 300);

  var questions;
  var images;
  var highscores;
  var audio;

  //loads the background Images
  function initiateGame(){
    questions=generateQuestions();
    images=loadImages(questions);
    audio = new Audio('sounds/Bike.wav');
    highscores=loadHighscores();
  }
  
  //clears the interval
  clearInterval(loading);

  //starts the game
  /*$.ajax({
        'async': false,
        'url': initiateGame(),
        'success': function(){
        runGame(images,questions, highscores);
        audio.play();
        console.log("hej");
        }
  })*/

  $.when($.ajax(initiateGame())).then(function () {
    console.log("hej");
    runGame(images,questions, highscores);

});
}





