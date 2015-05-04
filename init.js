

var canvas = null;
var context = null;

window.onload = initCanvas;

function initCanvas() {

  var myFirebaseRef = new Firebase("https://bonnevillehighscores.firebaseio.com/");
  // Get a reference to our posts
var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts");

// Attach an asynchronous callback to read the data at our posts reference
myFirebaseRef.on("value", function(snapshot) {
  console.log(snapshot.val());
  var json=snapshot.val();
  console.log(json.highscore[1].name);
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
  
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
  highscores[1].name="Oskar"; 
  
  return highscores;
}

