//variables
var canvas = document.getElementById("canvas");
var draw = canvas.getContext("2d");
var charactewidth = 40;
var characterheight = 40;
var characterx = 20;
var charactery = window.innerHeight - characterheight - 450;
var dx = 2;
var dy = 0;
var bounce = 219;
var mouseX;
var mouseY;
var i = 0;
var acceleration = 0.1;
var obsstacleXArray = [132, 433, 54];
var obsstacleYArray = [12, 233, 54];
var obsstacleWidthArray = [512, 143, 54];
var obsstacleHeightArray = [112, 43, 54];
var mousedetection = true;

//canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



//main game function
function run() {

	//loops the function
	requestAnimationFrame(run);

	//clears the screen
	draw.clearRect(0, 0, canvas.width, canvas.height)

	//draws the ground
	draw.beginPath();
	draw.fillStyle = "#823819";
	draw.fillRect(0, canvas.height - 20, canvas.width, 20);
	draw.fill();
	draw.closePath();

	//draws the main character
	draw.beginPath();
	draw.fillStyle = "#128522";
	draw.fillRect(characterx, charactery, charactewidth, characterheight);
	draw.fill();
	draw.closePath();


	//draws Obstacle
	for (var i = 0; i < obsstacleXArray.length; i++) {
		new Obstacle(
			obsstacleXArray[i],
			obsstacleYArray[i],
			obsstacleWidthArray[i],
			obsstacleHeightArray[i]
		).drawObstacle();
	}


};
run();

//keyboard events
window.addEventListener("keydown",function(event) {
	//vertical and horizontal movement
	//left
	if(event.keyCode == 65) {
		console.log("left");
		characterx--;
	}
	//up
	if(event.keyCode == 87) {
		console.log("up");
		charactery--;
	}
	//right
	if(event.keyCode == 68) {
		console.log("right");
		characterx++;
	}
	//down
	if(event.keyCode == 83) {
		console.log("down");
		charactery++;
	}
});



//get mouse coordinates

if (mousedetection == true) {
window.addEventListener("mousemove", function(e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
});
}
//defines the jump
function jump() {
	//animation
	requestAnimationFrame(jump);
	//increment i variable
	i++;

 //gravity
 if (charactery < window.innerHeight - 20 - characterheight) {
	 dy += acceleration;
	 charactery += dy;
 }
	else {
		dy = 2;
	}
	//bounce on ground
	if (charactery > window.innerHeight - 20 - characterheight) {
		dy = -dy;
		charactery += dy;

	}

	//mouse control
	if (mouseX > characterx + (charactewidth / 2)) {
		characterx += (mouseX - characterx + (charactewidth / 2)) / 77;
	}
else if (mouseX < characterx + (charactewidth / 2)) {
	characterx -= (characterx - mouseX + (charactewidth / 2)) / 77;
}


}
jump();

//obstacles
function Obstacle (x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.drawObstacle = function() {
		draw.fillStyle = "#000000";
		draw.fillRect(this.x, this.y, this.width, this.height);
		draw.fill();
	}
}


//collision
if (mousedetection == true && characterx + charactewidth >= Obstacle.x) {
	mousedetection = false;
	dx = -dx;
}