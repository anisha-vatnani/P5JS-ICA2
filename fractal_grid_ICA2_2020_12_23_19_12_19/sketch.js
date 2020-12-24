// randomly generates fractal tree art behind grid 
// meant to look like city blueprint 
function setup() {
	var size = 800;
	createCanvas(size, size);
	background(0);
  
noLoop();
  
	stroke(255,70);
	angleMode(DEGREES);
}

function draw() {
  //creating grid
    for (var i = 0; i < width; i += 10) {
    
  	line(i, 0, i, height);
  	line(width, i, 0, i);
  
  }
	// creating main tree and branches
	translate(width/2,height/2)
  rotate(90/2);
	branchComponent(100, 8, 60);
  branchComponent(200, 18, 50);
  
}

function branch(len, angle, gen) {
  // the angle , size and other properties of brancing 
	line(0, 0, 0, -len);
	translate(0, -len);
	len *= 0.7;
	angle = random(angle-30, angle+20);

	if (len > 3) {
		push();
		rotate(angle);
		branch(len, angle, gen);
		pop();

		push();

		rotate(-angle);
		branch(len, angle, gen);
		pop();
	}
}
// creating the branch 
function branchComponent(len, amount, angle) {
	var increment = 360/amount;
	var rotAmount;

	for (var i = 0; i < amount; i++) {
		push();
		rotAmount = -180 + increment * i
		rotate(random(rotAmount - 60, rotAmount));
		branch(len, angle, 1);
		pop();
	}
}