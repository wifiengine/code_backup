//declare variables
var body = document.getElementById("body");
var canvas = document.getElementById("canvas");
var iwidth = window.innerWidth;
var iheight = window.innerHeight;
//variable for drawing
var draw = canvas.getContext("2d");
//variables for character paramaters
var playerwidth = 20;
var playerheight = 20;
var playerx = iwidth / 2 - playerwidth / 2;
var playery = iheight / 2 - playerheight / 2;
var playerspeed = 20;
//mouse co-ordinates
var mousex;
var mousey;
//enemy's parameters
var enemyxpositions = [43, 94, 200];
var enemyypositions = [41, 120, 83];
var enemywidths = [12, 43, 45];
var enemyheights = [43, 11, 87];
var i = 0;
var collision = false;
///////////////////////////////////////////////////////////////////////////////////
///////         separating variables and rest of the code                   ///////              
///////////////////////////////////////////////////////////////////////////////////

//puts canvas in top right corner
body.style.margin = "0";


//changes the canvas's style namely color, margin, width and height
canvas.style.backgroundColor = "black";
canvas.style.margin = "0";
canvas.width = iwidth;
canvas.height = iheight;

//the function that the player is drawn in
function drawplayer() {	

	//allows animation
	requestAnimationFrame(drawplayer);

	//clears the canvas every time the function runs so that the image doesn't leave a mark
	draw.clearRect(0, 0, iwidth, iheight);


	//drawing the player
	draw.fillStyle = "#ffff00";
	draw.fillRect(playerx, playery, playerwidth, playerheight);
	draw.fill();


	//checking where the mouse is and letting the player follow it
	if (mousex > playerx + playerwidth / 2) {
		playerx += (mousex - playerx + playerwidth) / playerspeed;
	}
	if (mousex < playerx + playerwidth / 2) {
		playerx -= (playerx - mousex + playerwidth) / playerspeed;
	}
	if (mousey > playery + playerheight / 2) {
		playery += (mousey - playery + playerheight) / playerspeed;
	}
	if (mousey < playery + playerheight / 2) {
		playery -= (playery - mousey + playerheight) / playerspeed;
	}


	//the obstacles' object
	function Enemy(enemyx, enemyy, enemywidth, enemyheight) {
		this.enemyx = enemyx;
		this.enemyy = enemyy;
		this.enemywidth = enemywidth;
		this.enemyheight = enemyheight;
		this.enemies = function() {
			draw.fillStyle = "#0000ff";
			draw.fillRect(enemyx, enemyy, enemywidth, enemyheight);
			draw.fill();
		}
	

		//collision detection
		if (mousex + (playerwidth / 2) > this.enemyx && 
			mousex - (playerwidth / 2) < this.enemyx + this.enemywidth &&
			mousey + (playerheight / 2) > this.enemyy &&
			mousey - (playerheight / 2) < this.enemyy + this.enemyheight) {
				collision = true;
		}
		else {
			collision = false;
		}

		//collision implementation
		if (collision == true) {
			//left collision
			if (playerx + (playerwidth) > this.enemyx && playerx + (playerwidth) < this.enemyx + (this.enemywidth / 2)) {
				playerx = this.enemyx - playerwidth;
			}
			//right collision
			if (playerx - (playerwidth / 2) < this.enemyx + this.enemywidth && playerx - (playerwidth / 2) > this.enemyx + (this.enemywidth / 2)) {
				playerx = this.enemyx + this.enemywidth;
			}
			//top collision
			if (playery + (playerheight) > this.enemyy && playery + (playerheight) < this.enemyy + (this.enemyheight / 2)) {
				playery = this.enemyy - playerheight;
			}
			//bottom collision
			if (playery - (playerheight / 2) < this.enemyy + this.enemyheight && playery - (playerheight / 2) > this.enemyy + (this.enemyheight / 2)) {
				playery = this.enemyy + this.enemyheight;
			}

		}




	}

		//draws all the obstacles
		for (i = 0; i < enemyxpositions.length; i++) {
			new Enemy(	enemyxpositions[i],
						enemyypositions[i],
						enemywidths[i],
						enemyheights[i]).enemies();
		}


}
drawplayer();


//gets the mouse co-ordinates
window.onmousemove = function mousepos(event) {
	mousex = event.clientX;
	mousey = event.clientY;
}


