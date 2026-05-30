class linez{
  constructor(posX1, posY1, posX2, posY2, dev, initLines, initPoints){

    this.x1 = posX1;
    this.y1 = posY1;
  
    this.x2 = posX2;
    this.y2 = posY2;
    
    this.dev = dev;

    this.numLines = initLines;
    this.numPoints = initPoints;

    this.execX1 = new Array(this.numLines);
    this.execY1 = new Array(this.numLines);

    this.execX2 = new Array(this.numLines);
    this.execY2 = new Array(this.numLines);

    for(let i = 0; i < this.numLines; i++){
      this.execX1[i] = this.x1;
      this.execY1[i] = this.y1;

      this.execX2[i] = this.x2;
      this.execY2[i] = this.y2;
    }

    this.xPoint = 0;
    this.yPoint = 0;

    this.r = 255;
    this.g = random(50, 130);
    this.b = 0;

    this.execPointX = this.xPoint + this.dev;
    this.execPointY = this.yPoint + this.dev;
  }

  

  changeParams(posX1, posY1, posX2, posY2, initLines, initPoints)
  {
    this.x1 = posX1;
    this.y1 = posY1;
  
    this.x2 = posX2;
    this.y2 = posY2;
    
    //this.dev = dev;

    this.numLines = initLines;
    this.numPoints = initPoints;
  }

  changeDev(dev){
    this.dev = dev;
  }

  keepInCanvas()
  {
    for (let i = 0; i < this.numLines; i++){
      let goodX1 = constrain (this.execX1[i], 0.1 * width, 0.9 * width);
      let goodY1 = constrain (this.execY1[i], 0.1 * height, 0.9 * height);
  
      let goodX2 = constrain (this.execX2[i], 0.1 * width, 0.9 * width);
      let goodY2 = constrain (this.execY2[i], 0.1 * height, 0.9 * height);
  
      this.execX1[i] = goodX1;
      this.execY1[i] = goodY1;
  
      this.execX2[i] = goodX2;
      this.execY2[i] = goodY2;

    }


  }

  deviate()
  {
    for (let i = 0; i < this.numLines; i++){
      this.devX1 = random(-this.dev, this.dev);
      this.devY1 = random(-this.dev, this.dev);
  
      this.devX2 = random(-this.dev, this.dev);
      this.devY2 = random(-this.dev, this.dev);
  
  
      this.execX1[i] = this.x1 + this.devX1;
      this.execY1[i] = this.y1 + this.devY1;
  
  
      this.execX2[i] = this.x2 + this.devX2;
      this.execY2[i] = this.y2 + this.devY2;
    }

  }

  display(){
    if(random(100) < 3){ //this makes the stuff pop in
      this.renderChoice = random(0, 1);
      this.renderChoice = round(this.renderChoice);
    }

    this.deviate();
    this.keepInCanvas();

    switch(this.renderChoice){
      case 0: this.straightLines(this.x1, this.y1, this.x2, this.y2);
              break;
      case 1: this.dottedLines(this.x1, this.y1, this.x2, this.y2);
              break;
      default: 
              break;
    }

  }
  straightLines(xa, ya, xb, yb){

    for (let i = 0; i < this.numLines; i++){
      strokeWeight(random(1, 5));
      stroke(this.r, this.g, this.b, random(26));
      line(this.execX1[i], this.execY1[i], this.execX2[i], this.execY2[i]);  
    }
  }

  changeColor(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
  }

  dottedLines(xa, ya, xb, yb){

    let xDelta = xb - xa;
    let yDelta = yb - ya;
    
    for (let i = 0; i < this.numPoints; i++){
        let factor = (i+1)/this.numPoints;
        this.xPoint = xa + (xDelta * factor);
        this.yPoint = ya + (yDelta * factor);

        let pointDev = this.dev * random(0.5);

        this.execPointX = this.xPoint + random(-pointDev, pointDev);
        this.execPointY = this.yPoint + random(-pointDev, pointDev);

        this.execPointX = constrain(this.execPointX, width * 0.1, width * 0.9);
        this.execPointY = constrain(this.execPointY, height * 0.1, height * 0.9);


        let newStrokeWeight = constrain(this.dev, random(1, 15), 20);
        angleMode(DEGREES);
        strokeWeight(random(newStrokeWeight));
        stroke(255, random(5));
        fill(this.r, this.g, this.b, random(155))
        arc(this.execPointX, this.execPointY, random(5), random(5), random(0, 180), random(180, 360));
      }

    }

}