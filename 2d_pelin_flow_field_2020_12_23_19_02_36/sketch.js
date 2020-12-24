let inc = 0.1 // increment value for movement 
var scl = 30 // scale 
var cols, rows; // columns and rows for grid 

var fr
var zoff = 0; //z off set 
var particles = []; // particles array - check files
var flowfield 


function setup() {
  createCanvas(800, 800);
  cols = floor(width / scl);
  rows = floor(height / scl)
  fr = createP('') // paragraph element 
  
  flowfield = new Array(cols*rows)
  
  pixelDensity(1);//for laptops with retina or high display

  for (var i = 0; i < 1000; i++) {
    particles[i] = new Particle();
  }

  background(0) // black background

}

function draw() {
   // if (mouseX > 200) {
   //  background('orange'); } else { background(0,80); }
  
  var yoff = 0; //y off set
  noiseDetail(12); // 4 is default - higher gives more detail 
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      //introducing noise - can use Sin instead
      var angle = noise(xoff, yoff, zoff) * TWO_PI
      var v = p5.Vector.fromAngle(angle); //creating vector from angle  
      v.setMag(2)// magnitude
      
      flowfield [index] = v;
      
      xoff += inc
      stroke(0)
   
    }
    yoff += inc

   zoff += 0.0004
  }
  
//loop for particle movement 
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
   
  }
  
  fr.html(floor(frameRate()))
}