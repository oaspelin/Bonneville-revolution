

var canvas = null;
var context = null;

window.onload = initCanvas;

function initCanvas() {
  
  canvas = document.querySelector("canvas");
  context = canvas.getContext( "2d" );
  
  canvas.width = 800;
  canvas.height = 500;

  var contextIsSupported = context !== null;
  loadGraphics();
}