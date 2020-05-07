//variables
var canvas = document.getElementById("canvas");
var draw = canvas.getContext("2d");
var bx = 200;
var by = 200;
var mx;
var my;

//canvas size
canvas.width = 1000;
canvas.height = 600;

function run() {

requestAnimationFrame(run);


draw.clearRect(0,0,1000,600);

//draw
draw.fillStyle = "#ff0000";
draw.arc(bx,by,20,0,2 * Math.PI);
draw.fill();



//mouse position
window.addEventListener("mousemove",function(event) {
	mx = event.clientX;
	my = event.clientY;

	var dx = mx - bx;
	var dy = my - by;

	bx += dx;
	by += dy;


});




}

run();