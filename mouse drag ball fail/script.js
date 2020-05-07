//variables
var canvas = document.getElementById("canvas");
var draw = canvas.getContext("2d");
var mx = 0;
var my = 0;
var bx = window.innerWidth / 2;
var by = window.innerHeight / 2;




//canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//runs functions
function init() {
	main();
	mousepos();
	resize();
}
init();





//main function
function main() {

	//loops the function
	requestAnimationFrame(main);

		

		//clear canvas
		draw.fillStyle = "rgba(0,0,0,0.2)";
		draw.fillRect(0,0,window.innerWidth,window.innerHeight);
		draw.fill();
		//draw ball
		draw.beginPath();
		draw.fillStyle = "#00FF9C";
		draw.arc(bx,by,20,0,2 * Math.PI);
		draw.fill();
		draw.closePath();

//ball following mouse
		if (mx > bx) {
			bx += (mx - bx) / 77;
		}
		else if(mx < bx) {
			bx -= (bx - mx) / 77;
		}
		else {
			bx += 0;
		}

		if (my > by) {
			by += (my - by) / 77;
		}
		else if(my < by) {
			by -= (by - my) / 77;
		}
		else {
			by += 0;
		}



};






//get mouse position
function mousepos() {
	window.addEventListener("mousemove", function(event) {
		mx = event.clientX;
		my = event.clientY;


});
};




//when the screen is resized
function resize() {
	window.addEventListener("resize",function() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	});
};




