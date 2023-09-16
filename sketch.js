function setup() {
    createCanvas(1024, 720);
    background("black");
  }
  
  function draw() {
    stroke("yellow");
    fill("red");
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }