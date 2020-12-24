

function Particle () { 
this.pos = createVector(random(width),random(height)) //position
  this.vel = createVector(0,0) // velocity
    this.acc = createVector(0,0) // acceleration 
  this.maxspeed = 4 // maximum speed 
  
  this.prevPos = this.pos.copy() 
  
  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
    
  
  }
  // lines follow these vectors 
  this.follow = function(vectors){
    var x = floor(this.pos.x/scl);
        var y = floor(this.pos.y/scl);
        var index = x + y * cols; 
    var force = vectors [index];
    this.applyForce(force);


  }
  
  this.applyForce= function(force){
    this.acc.add(force)
  }
  
  this.show = function() {
  //fill(random(144,200),random(66),random(217,255),60)
   stroke(random(144,200),random(66),random(217,255),60)
   strokeWeight(1)
    // noStroke()
   // ellipse(this.pos.x,this.pos.y,2,2)
    line(this.pos.x,this.pos.y,this.prevPos.x,this.prevPos.y)
   
   // rect(this.pos.x,this.pos.y,this.prevPos.x,this.prevPos.y);

   
    this.updatePrev();
  
  }
  // allows the point to return to its original point
  this.updatePrev = function(){
    this.prevPos.x = this.pos.x
    this.prevPos.y = this.pos.y
  }
    // keeps it inside the size of the canvas  
  this.edges = function(){
    if (this.pos.x > width) 
    {this.pos.x = 0
   this.updatePrev() 
    }
    
    if (this.pos.x < 0)
    {this.pos.x = width
    this.updatePrev()
    }
    
    if (this.pos.y > height)
    {this.pos.y = 0
   this.updatePrev() 
    }
    
    if (this.pos.y < 0) 
    {this.pos.y = height
   this.updatePrev() 
    }
    
  } 
}