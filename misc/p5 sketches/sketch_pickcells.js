// Pick Cells
// Amogh Dwivedi
// amoghdwivedi.com
// all rights reserved


let n = 50;
n--;

let clock2;
let choice;
let dir;

function setup() {
  // Create a canvas that fills the entire browser window
  let canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');
  choice = floor(random(4));
  frameRate(30);
}

function draw() {
  background(0, 255);

  clock2 = frameCount % (60 * 3);
  clock2 /= 100;

  if (frameCount % 10 == 0) {
    n -= floor(random(1, 2));
  }

  if (clock2 == 0) {
    let newChoice = floor(random(4));
    while (choice == newChoice) newChoice = floor(random(4));

    choice = newChoice;
    n = floor(random(50, 80));
  }

  drawPoints();
}

function drawPoints() {
  for (let j = 0; j <= n; j++) {
    for (let i = 0; i <= n; i++) {
      push();
      translate(width * (i / n), height * (j / n));
      switch (choice) {
      // horizontal gradients: i/n, (n-i)/n
      // vertical gradients: j/n, (j-i)/n
        case 0:
          dir = (i / n);
          break;
        case 1:
          dir = (j/n);
          break;
        case 2:
          dir=((n - i) / n);
          break;
        case 3:
          dir=((n - j) / n);
          break;
      }

      fill (dir * 200 + random(-clock2 * random(10), clock2));

  
      rectMode(CENTER);
      noStroke();
      rect(
        random(-clock2 / 10, clock2 / 10),
        random(-clock2 / 10, clock2 / 10),
        (500/n) + 1,
        (500/n) + 1
      );
      pop();
    }
  }
}
