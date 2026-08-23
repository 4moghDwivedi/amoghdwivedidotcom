// New Life
// Amogh Dwivedi
// amoghdwivedi.com
// all rights reserved


let angle = 1;
let totalAngle;

let frameRateVal;

let bRed, bGreen, bBlue;

let frameCoords = [
    [0.1, 0.1, 0.9, 0.1],
    [0.9, 0.1, 0.9, 0.9],
    [0.9, 0.9, 0.1, 0.9],
    [0.1, 0.9, 0.1, 0.1]
];

let nCoords = [
    [0.15, 0.2, 0.15, 0.4],
    [0.15, 0.2, 0.3, 0.4],
    [0.3, 0.2, 0.3, 0.4],
];

let e1Coords = [
    [0.35, 0.2, 0.55, 0.2],
    [0.35, 0.2, 0.35, 0.4], 
    [0.35, 0.4, 0.55, 0.4],
    [0.35, 0.3, 0.5, 0.3] 
];

let wCoords = [
    [0.6, 0.2, 0.6, 0.4],
    [0.6, 0.4, 0.725, 0.3],
    [0.725, 0.3, 0.85, 0.4],
    [0.85, 0.4, 0.85, 0.2] 
];

let lCoords = [
    [0.2, 0.6, 0.2, 0.8],
    [0.2, 0.8, 0.3, 0.8]
];

let iCoords = [
    [0.35, 0.6, 0.35, 0.8],
];

let fCoords = [
    [0.45, 0.6, 0.45, 0.8],
    [0.45, 0.6, 0.6, 0.6],
    [0.45, 0.7, 0.6, 0.7]
];

let e2Coords = [
    [0.65, 0.6, 0.8, 0.6],
    [0.65, 0.6, 0.65, 0.8],
    [0.65, 0.8, 0.8, 0.8],
    [0.65, 0.7, 0.8, 0.7]
];

let nLinez = [];
let e1Linez = [];   
let wLinez = [];

let lLinez = [];
let iLinez = [];
let fLinez = [];
let e2Linez = [];

let frameLinez = [];

function setup(){
    let canvas = createCanvas(500, 500);
    canvas.parent('sketch-holder');

    bRed = 0;
    bGreen = 0;
    bBlue = 0;
    background(bRed, bBlue, bGreen, 20);
    setupLetters();
    setupFrame();
}
function draw(){

    background(bRed, bBlue, bGreen, 165);

    frameRate(random(5, 10));
    angleMode(DEGREES);

    totalAngle = (sin(angle)*100) + 70;

    updateDev(totalAngle);
    updateLetters();
    updateFrame();

    angle += (10); 

    angle = angle%360;

    stroke(255, 255, 255, random(50));
    strokeWeight(random(1));
    line(width * random(1), height * random(1), width * random(1), height * random(1));
}
function setupFrame(){
    
    // setting up frame
    for (let i = 0; i < frameCoords.length; i++)
        {
            frameLinez.push (new linez(
                width * frameCoords[i][0], height * frameCoords[i][1],
                width * frameCoords[i][2], height * frameCoords[i][3],
                10, 5, 10
            ));
        }

}
function updateFrame(){

    for (let i = 0; i < frameCoords.length; i++)
        {
            frameLinez[i].display();
        }

}
function alterParams(alterNumLines, alterNumPoints){

    for (let i = 0; i < nCoords.length; i++)
        {
            nLinez[i].changeParams(
                width * nCoords[i][0], height * nCoords[i][1],
                width * nCoords[i][2], height * nCoords[i][3],
                random(alterNumLines), random(alterNumPoints)
            );
        }

    // setting up E1
    for (let i = 0; i < e1Coords.length; i++)
        {
            e1Linez[i].changeParams(
                width * e1Coords[i][0], height * e1Coords[i][1],
                width * e1Coords[i][2], height * e1Coords[i][3],
                random(alterNumLines), random(alterNumPoints)
            );
        }


    // setting up W
    for (let i = 0; i < wCoords.length; i++)
        {
            wLinez[i].changeParams(
                width * wCoords[i][0], height * wCoords[i][1],
                width * wCoords[i][2], height * wCoords[i][3],
                random(alterNumLines), random(alterNumPoints)
            );
        }


    // setting up L
    for (let i = 0; i < lCoords.length; i++)
        {
            lLinez[i].changeParams(
                width * lCoords[i][0], height * lCoords[i][1],
                width * lCoords[i][2], height * lCoords[i][3],
                random(alterNumLines), random(alterNumPoints)
            );
        }

    // setting up I
    for (let i = 0; i < iCoords.length; i++)
        {
            iLinez[i].changeParams(
                width * iLinez[i][0], height * iLinez[i][1],
                width * iLinez[i][2], height * iLinez[i][3],
                random(20), random(alterNumPoints)
            );
        }

    // setting up F
    for (let i = 0; i < fCoords.length; i++)
        {
            fLinez[i].changeParams(
                width * fCoords[i][0], height * fCoords[i][1],
                width * fCoords[i][2], height * fCoords[i][3],
                random(alterNumLines), random(alterNumPoints)
            );
        }

    // setting up E
    for (let i = 0; i < e2Coords.length; i++)
        {
            e2Linez[i].changeParams(
                width * e2Coords[i][0], height * e2Coords[i][1],
                width * e2Coords[i][2], height * e2Coords[i][3],
                random(alterNumLines), random(alterNumPoints)
            );
        }
    
}
function setupLetters(){
    // setting up N
    for (let i = 0; i < nCoords.length; i++)
        {
            nLinez.push (new linez(
                width * nCoords[i][0], height * nCoords[i][1],
                width * nCoords[i][2], height * nCoords[i][3],
                10, 5, 50
            ));
        }

    // setting up E1
    for (let i = 0; i < e1Coords.length; i++)
        {
            e1Linez.push (new linez(
                width * e1Coords[i][0], height * e1Coords[i][1],
                width * e1Coords[i][2], height * e1Coords[i][3],
                10, 5, 50
            ));
        }

    // setting up W
    for (let i = 0; i < wCoords.length; i++)
        {
            wLinez.push (new linez(
                width * wCoords[i][0], height * wCoords[i][1],
                width * wCoords[i][2], height * wCoords[i][3],
                10, 5, 50
            ));
        }

    // setting up L
    for (let i = 0; i < lCoords.length; i++)
        {
            lLinez.push (new linez(
                width * lCoords[i][0], height * lCoords[i][1],
                width * lCoords[i][2], height * lCoords[i][3],
                10, 5, 50
            ));
        }

    // setting up I
    for (let i = 0; i < iCoords.length; i++)
        {
            iLinez.push (new linez(
                width * iCoords[i][0], height * iCoords[i][1],
                width * iCoords[i][2], height * iCoords[i][3],
                10, 5, 50
            ));
        }

    // setting up F
    for (let i = 0; i < fCoords.length; i++)
        {
            fLinez.push (new linez(
                width * fCoords[i][0], height * fCoords[i][1],
                width * fCoords[i][2], height * fCoords[i][3],
                10, 5, 50
            ));
        }

    // setting up E
    for (let i = 0; i < e2Coords.length; i++)
        {
            e2Linez.push (new linez(
                width * e2Coords[i][0], height * e2Coords[i][1],
                width * e2Coords[i][2], height * e2Coords[i][3],
                10, 5, 50
            ));
        }

}
function updateDev(devAmount)
{

    devAmount = constrain(devAmount, 3, 100);
    for (let i = 0; i < nCoords.length; i++)
        {
            nLinez[i].changeDev(devAmount);
        }

    for (let i = 0; i < e1Coords.length; i++)
        {
            e1Linez[i].changeDev(devAmount);
        }

    for (let i = 0; i < wCoords.length; i++)
        {
            wLinez[i].changeDev(devAmount);
        }


    for (let i = 0; i < lCoords.length; i++)
        {
            lLinez[i].changeDev(devAmount);
        }

    for (let i = 0; i < iCoords.length; i++)
        {
            iLinez[i].changeDev(devAmount);
        }

    for (let i = 0; i < fCoords.length; i++)
        {
            fLinez[i].changeDev(devAmount);
        }

    for (let i = 0; i < e2Coords.length; i++)
        {
            e2Linez[i].changeDev(devAmount);
        }

    for (let i = 0; i < e2Coords.length; i++)
        {
            frameLinez[i].changeDev(devAmount);
        }

} 
function updateLetters(){
    
    for (let i = 0; i < nCoords.length; i++)
        {
            nLinez[i].display();
        }

    for (let i = 0; i < e1Coords.length; i++)
        {
            e1Linez[i].display();
        }

    for (let i = 0; i < wCoords.length; i++)
        {
            wLinez[i].display();
        }


    for (let i = 0; i < lCoords.length; i++)
        {
            lLinez[i].display();
        }

    for (let i = 0; i < iCoords.length; i++)
        {
            iLinez[i].display();
        }

    for (let i = 0; i < fCoords.length; i++)
        {
            fLinez[i].display();
        }

    for (let i = 0; i < e2Coords.length; i++)
        {
            e2Linez[i].display();
        }
}
function drawGrid(){
    for (let i = 0; i < 20; i++)
        {
            strokeWeight(3);
            stroke(0);
            line((i+1)* 0.05 * width, 0, (i+1)* 0.051* width, height);
        }

    for (let i = 0; i < 10; i++)
        {
            strokeWeight(2);
            stroke(0);
            line(0, (i+1) * 0.1 * height, width, (i+1) * 0.1 * height);
        }
        for (let i = 0; i < 20; i++)
            {
                strokeWeight(3);
                stroke(0);
                line((i+1)* 0.05 * width, 0, (i+1)* 0.051* width, height);
            }
    
        for (let i = 0; i < 10; i++)
            {
                strokeWeight(2
                );
                stroke(0);
                line(0, (i+1)* 0.1 * height, width, (i+1)* 0.1 * height);
            }
        
        if (mouseIsPressed === true)
            {
                strokeWeight(14);
                stroke(255, 0, 0);
                point(mouseX, mouseY);
            }
    
}