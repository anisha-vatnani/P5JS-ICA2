// click to add more eyeballs 
const rectangles = []; // for background rectangles 
let swarm = []; //array for objects
let img
let word = '1234567890'; // for random letters
let index = 0;

// loading image of eyeball 
function preload() {
  img = loadImage('assets/eye.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) { //create 10 objects 
    swarm[i] = new Particle(); //and add them to array
  }

  // Create some random rectangles
  const rectangleCount = 70;
  for (let i = 0; i < rectangleCount; i++) {
    // Randomly place some rectangles within -1..1 space
    //const shrink = 1;
    const position = [
      random(-1, 1),
      random(-1, 1)
    ];
    // Create a random 0..1 scale for the rectangles
    const scale = random(0.5, 1);
    const size = [
      random(0, 1) * scale,
      random(0, 1) * scale
    ];
    rectangles.push({
      position,
      size
    });
  }
}

function draw() {
  background(0);
  fill(0);
  stroke(0);

  fill(255);
  textFont('Times');
  textSize(200);

  index++;
  if (index >= word.length) {
    index = 0;
  }

  for (let i = 0; i < word.length; i++) {
    text(word[i], random(width), random(height));
  }

  for (let i = 0; i < swarm.length; i++) {
    swarm[i].update(); //update and display for
    swarm[i].display(); //every obj in array
  }
  blendMode(BLEND);
  strokeJoin(MITER);
  rectMode(CENTER);
  const minDim = Math.min(width, height);

  rectangles.forEach(rectangle => {
    const {
      position,
      size
    } = rectangle;

    let [x, y] = position;
    let [w, h] = size;

  
    push();

    // Then translate to the center
    translate(width / 2, height / 2);

    // And scale the context by half the size of the screen
    scale(minDim, minDim);

    strokeWeight(0.015);
    blendMode(DIFFERENCE);
    fill(random(0, 255), 0, 0, 50)

    //  drawing the rectangle
    rect(x, y, w, h);

    fill(240, 10, 10)
    rect(w, h, 20, 30);

    // and restore the transform for the next rectangle
    pop();
  });
}
// creating bouncing eyeballs
class Particle {
  constructor() {
    this.posX = random(0, width);
    this.posY = random(0, height);
    this.velX = random(1, 2);
    this.velY = random();
    this.accX = 0.0;
    this.accY = 0.1
    this.size = random(50, 150);
  }

  update() {
    this.posX += this.velX;
    this.posY += this.velY;

    this.velX += this.accX;
    this.velY += this.accY;

    //check for canvas edges and bounce
    if (this.posX < 0 || this.posX > width) {
      this.velX = -this.velX;
    }

    if (this.posY < 0 || this.posY > height) {
      this.velY = -this.velY;
    }
  }

  display() {

    //display the eyeballs
    stroke(25);
    strokeWeight(1);
    image(img, this.posX, this.posY, this.size, this.size);


  }
}

//function to add new particle if mouse is clicked
function mouseClicked() {
  let p = new Particle(); //create new particle
  p.posX = mouseX; //position it at mouse loc
  p.posY = mouseY;
  swarm.push(p); //add it into the array
}