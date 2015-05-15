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
    for (i=0;i<10;i++){
      highscores[i]=json.highscore[i];
    }
  })();
  return highscores;
}

function handleHighscores(name, points,highscores){
  for(i=0;i<10;i++){
    if(points>highscores[i].score){
      highscores.splice(i,0,{name:name, score:points});
      break;
    }
  }

  var myFirebaseRef = new Firebase("https://bonnevillehighscores.firebaseio.com/");
  var highscoreRef = myFirebaseRef.child("highscore");

  for(i=0; i<10;i++){
    var name=highscores[i].name;
    var myFirebaseRef = highscoreRef.child(i);
      myFirebaseRef.update({
        "name": name,
        "score": highscores[i].score
    });
  }

}