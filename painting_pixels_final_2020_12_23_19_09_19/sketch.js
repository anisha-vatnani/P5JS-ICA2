//move mouse to vary colored pixel sizes 
// this can be considered as a color palette generator 
//introducing variables
let img;

let size
let x
let y

//loading image of my artwork 
function preload() {
  img = loadImage('assets/painting.jpeg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  img.loadPixels();
  img.resize(windowWidth, 0);

}


function draw() {
  background(0);
//maping the size of the pixels to the mouse
  let size = floor(map(mouseX, 0, width, 3, 60));

  for (var  y = 0;  y < img.height;  y++) {
    for (var  x = 0;  x < img.width;  x++) {
     
     //   var index = ( x +  y * img.width) *  4;
     // var r = img.pixels[index + 0];
     //  var g = img.pixels[index + 1];
     //   var b = img.pixels[index + 2];

      let c = img.get(x,y); // to recieve colors from the image
      // let r = red(c);
      // let g = green(c);
      // let b = blue(c);
      

      noStroke();


// creating the pixels
    //fill(r, g, b)
      fill(c)
      rect( x,  y, size, size)

       x =  x + size - 1
    }
     y =  y + size - 1
  }
}