

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
  highscores=loadHighscores();
  console.log(highscores);

  //For highscores
  //var person = prompt("Please enter your name", "");

  
  //starts the game
  runGame(images,questions, highscores);

}

function loadHighscores(){

  var highscores=[];
  var json = (function(){
    var json = null;
    $.ajax({
      'async': false,
      'global': false,
      'url': "https://bonnevillehighscores.firebaseio.com/.json",
      'dataType': "json",
      'success': function (data) {
        json = data;
      }
    });
    for (i=0;i<3;i++){
      highscores[i]=json.highscore[i];
    }
  })();

  /* Tarvitaan myöhemmin, päivittää JSON
  var myFirebaseRef = new Firebase("https://bonnevillehighscores.firebaseio.com/");
  var highscoreRef = myFirebaseRef.child("highscore");
  var myFirebaseRef = highscoreRef.child("1");
    myFirebaseRef.update({
    "name": "Olle"
  });
*/
  
  return highscores;
}



