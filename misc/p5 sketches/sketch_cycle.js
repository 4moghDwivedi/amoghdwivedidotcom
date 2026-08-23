// cycle
// Amogh Dwivedi
// amoghdwivedi.com
// all rights reserved

let numCols = 10;
let numRows = 10;
let cols1 = new Array(numCols);
let sWeights = new Array(numRows);
let firstIndex = 0;
let circColorVal = new Array(3);
let circColor;
let pend = 0;

function setup() {
  // Create a canvas that fills the entire browser window
  let canvas= createCanvas(500, 500);
  canvas.parent('sketch-holder');
    frameRate(10); 

  circColorVal[0] = 255;
  circColorVal[1] = 0;
  circColorVal[2] = 0;

  circColor=floor(random(2));

  for (let i = 0; i <= numCols; i++){
    cols1[i] = width * 0.8 * (i/numCols);
    cols1[i] += (width * 0.1);
  }

  for (let i = 0; i < numRows; i++){
    sWeights[i] = new Array(numCols);
  }

  for (let i = 0; i < numRows; i++){
    for (let j = 0; j <= numCols; j++){
        sWeights[i][j] = j*j*random(0.1, 0.9);
    }
  }

  for (let p = 1; p < numRows; p++){
    for (let i = p; i < numRows; i++){
      let thisTemp = sWeights[i][0];
    for (let j = 1; j <= numCols; j++){
      sWeights[i][j-1] = sWeights[i][j];
    }
      sWeights[i][numCols] = thisTemp;
    }
  }

}

function draw() {

  background(0, map(pend, 0, 100, 100, 255));

  pend += floor(random(5));

  pend = pend % 100;

  for (let j = 0; j < numRows; j++){
    for (let i = 0; i <= numCols; i++){
      push();
      translate(cols1[i], 0);
      stroke(random(circColorVal[0]), random(circColorVal[1]), circColorVal[2], random(255));

      if(random(100) < pend)
        {
          noFill();
          strokeWeight(map(pend,0, 100, 30, 1));
          circle(random(-1, 1), random(-5, 5) + height * (0.2 + ((0.6/(numRows-1))*j)), sWeights[j][i]);
        }
          else
        {
          strokeWeight(sWeights[j][i]);
          point(random(-1, 1), random(-5, 5) + height * (0.2 + ((0.6/(numRows-1))*j)));
        }
          pop();
    }
  }

  for (let i = 0; i < numRows; i++){
    cycle(i);
  }
}

function cycle(colNum){

  let tempWeight = sWeights[colNum][0];

  for (let i = 1; i <= numCols; i++)
  {
    sWeights[colNum][i-1] = sWeights[colNum][i] + random(-0.1, 0.1);
  }

  sWeights[colNum][numCols] = tempWeight;

}

function keyPressed(){
  if (key === ' '){
    incrementCircColor();
  }


}

function mouseClicked(){

  incrementCircColor();

}

function incrementCircColor(){

  frameRate(floor(random(7, 10)));
  circColor ++;
  circColor = circColor%3;

    if(circColor == 0){
    circColorVal[0] = 255;
    circColorVal[1] = 0;
    circColorVal[2] = 0;
  }
  else if(circColor == 1){
    circColorVal[0] = 0;
    circColorVal[1] = 255;
    circColorVal[2] = 0;
  }
  else if(circColor == 2){
    circColorVal[0] = 0;
    circColorVal[1] = 0;
    circColorVal[2] = 255;
}
}