function setup() {
  
    createCanvas(1440, 900);
    background(0);
    textAlign(LEFT, TOP);
    textSize(64);
    textStyle(BOLD);
    fill(255);
  }
  
  function draw() {
    
    textSize(64); 
    text("Now", 20, 20);
    
    textSize(64);
    text("On it", 20, height - 100);  
  }
  
  function mouseDragged() {
    
    fill(255, 0, 0); 
    textSize(160); 
    text("Act", mouseX, mouseY);
  }