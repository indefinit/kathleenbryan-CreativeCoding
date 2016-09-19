function setup() {
  
  createCanvas(500,500);
  background(0); 
}

function draw() {
  for (var x = 0; x < 250 ; x +=2) {
  line(0, mouseX +2 , 500, mouseX 2 );
  stroke(0,255,0); 
  }

 for (var x =1; x < 250 ; x +=2) {
  line(0, mouseX+2, 500, mouseX+2);
    stroke(255,255,0);
  }


 for (var x = 0; x < 500 ; x +=4) {
  line(x+2, 250, x+2, 500 );
  stroke(255,255,0); 
  }
  
  for (var x = 1; x < 500 ; x +=4) {
  line(mouseX +2, 250, mouseX+2, 500 );
  stroke(255); 
  }

/*
line(mouseX, 0, mouseX, 100);
fill(255,0,0);*/ 
 
}