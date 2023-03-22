function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  
    // Moiré pattern
    let spacing = 20;
    let weight = 2;
    let phase = map(sin(frameCount*0.05), -1, 1, 0, TWO_PI);
    let amplitude = 10;
    strokeWeight(weight);
    for (let i = 0; i < height/spacing; i++) {
      let y = i * spacing;
      let offset = sin(y*0.01 + phase) * amplitude;
      line(0, y + offset, width, y - offset);
    }
  }