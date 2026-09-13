function setup() {
  // Create a canvas that fills the entire browser window
  let canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');
  frameRate(3);
}

function draw() {

background(5, 8);
drawSky();
drawSun();
drawSand();
drawWater();
drawBanner();
drawFrame();



}

function drawSky(){
  for( let i = 0; i < 55; i++){
    let nextVal = i * 5;

    stroke(random(249, 255), 255 - nextVal, random(25));
    strokeWeight(random(5, 6));

    line(0, nextVal, 500, nextVal);
  }
}

function drawWater(){

  let numPoints = 300;
  let rows = random(8, 10);
  let heightDiff;

  push();
  stroke(100, 100, random(200, 255));
  strokeWeight(5);
  let horizonVal = 255;
  
  line(0, horizonVal, 500, horizonVal);

  pop();

  for (let j = 0; j < rows; j++){

    for (let i = 0; i < numPoints + 2; i++){

      push();

      heightDiff = j * rows * random(0.0, 1.00);
      strokeWeight(random(0.15));
      stroke(random(200, 255), random(225));
      fill(100, 100, random(100, 255), random(12, 30));


      angleMode(DEGREES);

      // approach 1

      translate(250, 0);

      triangle(random(-500, 500), 250 + heightDiff + random(-10, 5),
      random(-500,500), random(290, 300) + heightDiff,
      random(0, 300), random(290, 250) + heightDiff);

      pop();
    }
  }

}

function drawSun(){
  push();

  noStroke();
  fill(255, 255, 0, 200);
  if(mouseX <= 225)
  circle(random(349, 351), 200, map(mouseX, 0, 225, 49, 61));
  else
  circle(random(349, 351), 200, map(mouseX, 225, 500, 61, 49));

  pop();
}

function drawSand(){

  noStroke();
  fill(68, 55, 43, 122);
  rect(0, 325, 500, 500);

  let darken;

  for(let i = 0; i < 400; i++){
    darken = random(-10, -30);
  stroke(68 + darken, 55 + darken, 43 + darken, 50);
  strokeWeight(random(90));
  point(random(0, 500), random(325, 500));
  }


}

function drawBanner(){


  //pole

  push();
  // rectMode(CENTER);
  fill(random(30, 40 ));
  stroke(random(100));
  strokeWeight(1);
  rect(150 + random(3), 180, 15, 300);
  pop();


  for(let i = 0; i < 5; i++){
    push();
    stroke(random(0, 20));
    strokeWeight(random(5, 6));
    point(157 + random(3), 280 + (i*35));
    pop();
  }



  // signboard

  push();

  translate(157, 187);
  fill(random(50, 80), 0, 0);
  stroke(220);
  strokeWeight(2);
  rectMode(CENTER);
  rotate(random(0, -1));
  rect(0, 0, 170, 100, 9);

  textAlign(CENTER);
  fill(255, random(230, 255));
  stroke(255, random(230, 255));
  strokeWeight(1);
  textSize(15);
  text("UNSTABLE", 35, -25);
  text("CLIFFS", 43, -10);

    text("STAY", 35, 15);
  text("BACK", 45, 35);

  
  fill(255, 255, 0, random(200, 255));
  stroke(0);
  strokeWeight(random(2));
  triangle(-30, -35,
           -70, 25,
            10, 25);

  textSize(45);
  stroke(0);
  fill(0);
  text("!", -30, 15);

  pop();

}

function drawFrame(){

  push();
  fill(0, random(20));
  stroke(255);
  strokeWeight(random(43, 93));
  translate(250, 250);
  rotate(random(-2, 2));
  rect(-250, -250, 500, 500);
  pop();

}