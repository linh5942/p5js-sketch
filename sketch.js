let angleUP = 0;
let angleLeft = 120;
let angleRight = 240;

let x = 1;
let y = 2;
let z = 3;



var counter = 0;
var timeleft = 180;

function convertSeconds(s){
	var min = floor(s/60);
	var sec = s%60;
	return nf(min, 2) + ':' + nf(sec, 2);
	//number format function
	//for formatting numbers into strings
}



// function mousePressed(){
// 	console.log("press!");
// 	//allows you to trigger a particular action 
// 	//at a given moment in time
// 	setTimeout(rainbow, 3000); 

// }

// function rainbow(){
// 	createP('rainbow');
// 	//setTimeout(rainbow, 1000);
// }


function keyPressed(){
	if(keyCode == 81){
		//console.log("pressDownQ!");
		x = x + 1;
		console.log("x: " + x);
	}else if(keyCode == 87){
		//console.log("pressDownW!");
		x = x - 1;
		console.log("x: " + x);
	}else if(keyCode == 65){
		//console.log("pressDownA!");
		y = y + 2;
		console.log("y: " + y);
	}else if(keyCode == 83){
		//console.log("pressDownS!");
		y = y - 2;
		console.log("y: " + y);
	}
	else if(keyCode == 90){
		//console.log("pressDownZ!");
		z = z + 3;
		console.log("z: " + z);
	}else if(keyCode == 88){
		//console.log("pressDownX!");
		z = z - 3;
		console.log("z: " + z);
	}
	return false;
}



function setup(){
	createCanvas(800, 800);
	angleMode(DEGREES);

	//frameRate(30);
	
	

	//rainbow();
	//3 secs later the code gets excuted
	//setTimeout(rainbow, 3000); 

	frameRate(5);
	//refresh 2 times a second


	//just completely stop the timer
	//setInterval actually returns a value
	var interval = setInterval(timeIt, 1000);
	//every second to increase the counter


	function timeIt(){
		counter++;

		//reset counter
		if(counter == timeleft){
			//stop setInterval from continuing to go
			//call clearInterval function
			clearInterval(interval);
			//counter = 0;
		}
	}
	
	
	
}



function draw(){
	background(0);
	
	fill(255);//color white

	//let sc = second();
	//let sc2 = 60 - second();
	//let end = map(sc, 0, 60, 0, 360);
	textSize(25)
	text("Q speed up", 110, 120);
	text("W slow down", 110, 150);

	text("A speed up", 80, 400);
	text("S slow down", 80, 430);

	text("Z speed up", 610, 400);
	text("X slow down", 610, 430);


	textSize(30);
	text(convertSeconds(timeleft - counter), 350, 380);
	
	if (abs(x) == abs(y) && abs(y) == abs(z)){
		text("synchronized", 320, 410);
		//text put in (320, 410)
	}
	strokeWeight(4);
	noFill();
	


	//big object
	push();
	stroke(255); // white color
	translate(400, 400);
	ellipse(0, 0, 300, 300);
	ellipse(0, 0, 280, 280);
	//rotate(-end*2);
	//line(0, 0, 140, 0);
	pop();
	


	//up
	push();
	stroke(255, 190, 79); 
	translate(400, 140);
	ellipse(0, 0, 200, 200);
	rotate(angleUP);
	line(0, 0, 100, 0);
	angleUP = angleUP + x;
	//console.log("x: " + x);
	pop();


    //left
	push();
	stroke(12, 69, 125); 
	translate(200, 570);
	ellipse(0, 0, 200, 200);
	rotate(angleLeft);
	line(0, 0, 100, 0);
	angleLeft = angleLeft + y;
	//console.log("y: " + y);
	pop();


	//right
	push();
	stroke(107, 210, 219); 
	translate(600, 570);
	ellipse(0, 0, 200, 200);
	rotate(angleRight);
	line(0, 0, 100, 0);
	angleRight = angleRight + z;
	//console.log("z: " + z);
	pop();


    

	
}













