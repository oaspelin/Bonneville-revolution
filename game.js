

var canvas = null;
var context = null;

window.onload = initCanvas;

function initCanvas() {
  
  canvas = document.querySelector("canvas");
  context = canvas.getContext( "2d" );
  
  canvas.width = 720;
  canvas.height = 480;

  var contextIsSupported = context !== null;
  loadGraphics();
  listenToMouse();
}

function listenToMouse(){
	document.addEventListener("mousedown",function(e){
	    var pos=getMousePos(e);
	    console.log(pos);
	});

	function getMousePos(event) {
	    var rect = canvas.getBoundingClientRect();
	    x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	    y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	    return {
	        X: x - rect.left,
	        Y: y - rect.top
	    };
	}
}