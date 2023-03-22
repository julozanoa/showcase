function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  
    // Kinegram
    push();
    translate(width/2, height/2);
    let x = sin(frameCount*0.05) * 50;
    let y = cos(frameCount*0.05) * 50;
    let rot = frameCount*0.05;
    let scale = 1 + sin(frameCount*0.01)*0.2;
    let size = 150;
    let alpha = map(sin(frameCount*0.05), -1, 1, 0, 255);
    fill(0, alpha);
    noStroke();
    ellipse(x, y, size*scale, size);
    rotate(rot);
    ellipse(-x, -y, size*scale, size);
    pop();
    
  }
  