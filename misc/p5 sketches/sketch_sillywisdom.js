

let percent;
let target;

let glitchyFont;
let displayText;

let tolerance;

let strokeR, strokeG, strokeB;

let oneHundredFacts = new Array(100);

let currentFact;

function preload() {
  glitchyFont = loadFont("/misc/p5 sketches/assets/VT323-Regular.ttf");
}

function setup() {
  // Create a canvas that fills the entire browser window
  let canvas = createCanvas(500, 500);

  canvas.parent('sketch-holder');

  frameRate(60);

  strokeR = random(0, 255);
  strokeG = random(0, 255);
  strokeB = random(0, 255);

  percent = 0;
  target = floor(random(70, 100));
  displayText = false;

  loadFacts();
  currentFact = floor(random(100));
}

function draw() {

background(0, 0, 0);
checkProg();
loadingText();
loadingBar();

// if (frameCount > (60 * 10))
showFacts();

}

function checkProg(){

  if (percent < target){
    if (random(100) <= 12) percent += floor(random(0, 2));
  }

}

function loadingText(){

  push();
  fill(0, 255, 0);
  stroke(strokeR, strokeG, strokeB);
  strokeWeight(2);
  textAlign(CENTER);
  textFont(glitchyFont);
  textSize(45);
  if(frameCount % 45 == 0) displayText = !(displayText);

  if (displayText)
  {
      text("loading...", 250, 195);
  }

  pop();

}

function loadingBar(){

  push();

  rectMode(CORNERS);
  stroke(0, 255, 0);
  strokeWeight(1);
  noFill();
  tolerance = 0.0423;
  rect(width * (0.2 - (tolerance/5)), height * (0.6 - 0.07),
       width * (0.8 + (tolerance/5)), height * (0.65 - 0.07));

  pop();

  rectMode(CORNERS);

  for(let i = 0; i < floor(11 * ((percent/100))); i++){
    fill(0, 255, 0);
    stroke(strokeR, strokeG, strokeB);
    strokeWeight(1);
    rect(width * (0.20 + (i*0.05) + tolerance), height * (0.61 - 0.07),
       width * (0.25+ (i*0.05) - tolerance), height * (0.64 - 0.07));
  }

}

function showFacts(){

  textFont(glitchyFont);
  textSize(23);
  textAlign(CENTER);
  textWrap(WORD);
  fill(0, 255, 0);
  rectMode(CORNER);
  stroke(strokeR, strokeG, strokeB);
  strokeWeight(1);
  if (frameCount <= (60*45)){ // between 0 - 30 seconds
    if (frameCount % (60*10) == 0){
       currentFact = round(random(100));
    }
    text("fun fact #" + (currentFact + 1) + ": " + loadFacts[currentFact], 100, 350, 300, 500);
  }
  else if (frameCount >= (60* 45) && (frameCount < (60 * 60)))
  {
    text("fun fact #101: Patience is often considered a virtue", 100, 350, 300, 500);

  }
  else if (frameCount >= (60 * 60)){
      text("fun fact #102: not all things are worth waiting for", 100, 350, 300, 500);

  }

}

function loadFacts(){
  loadFacts[0] = "1 + 1 = 2";
  loadFacts[1] = "the sky is apparently not blue";
  loadFacts[2] = "lions are mammals";
  loadFacts[3] = "the kanjira is a south indian tambourine";
  loadFacts[4] = "there are soooo many grains of sand in the world";
  loadFacts[5] = "the classical pianist glenn gould never shook hands";
  loadFacts[6] = "red garland quotes miles davis' iconic solo from 'now's the time', on 'straight no chaser'";
  loadFacts[7] = "acculturation is the process of an individual entering a new foreign culture";
  loadFacts[8] = "the piano is technically a percussion instrument";
  loadFacts[9] = "peanut butter is supposedly not a great source of protein";
  loadFacts[10] = "2 + 2 = 4";
  loadFacts[11] = "whether or not sunsets are beautiful is a matter of opinion";
  loadFacts[12] = "boston can be a fairly boring city at times";
  loadFacts[13] = "not everyone enjoys christmas";
  loadFacts[14] = "human beings lie for all kinds of reasons";
  loadFacts[15] = "watching certain anime can be a moral education of sorts";
  loadFacts[16] = "some social groups are at a higher risk of various diseases, including diabetes and heart disease, and it is argued that some of the causes could be attributed to imperialism";
  loadFacts[17] = "thinking of a 100 facts is kind of challenging";
  loadFacts[18] = "making music with computer science is not an extremely modern concept, but not ancient by any means either";
  loadFacts[19] = "pakistan and bangladesh were the same country  once upon a time";
  loadFacts[20] = "3 + 3 = 9";
  loadFacts[21] = "some books are extremely boring and probably not worth the time (to you)";
  loadFacts[22] = "headphones come in multiple variants";
  loadFacts[23] = "people tend to disagree—sometimes with the use of violence— whether or not god exists";
  loadFacts[24] = "you can draw inspiration from all kinds of places";
  loadFacts[25] = "the word 'whale' spelled backwards is 'elahw'";
  loadFacts[26] = "it can get cold in california, despite its stubborn association with beaches and warm weather and such";
  loadFacts[27] = "washington dc has some pretty good restaurants";
  loadFacts[28] = "singapore was ruled by a dictator for most of its history";
  loadFacts[29] = "exclamation marks can make you sound friendly!";
  loadFacts[30] = "4 + 4 = 8";
  loadFacts[31] = "okra can a very delicious vegetable";
  loadFacts[32] = "refeeding syndrome is the result of consuming excess quantities of food after a prolonged period of starvation, which may result in death";
  loadFacts[33] = "there are many blood cells in your blood, like, so many";
  loadFacts[34] = "the interval of a perfect fourth is naturally present in a lot of musical cultures, probably because of the overtone series";
  loadFacts[35] = "music is a temporal art form";
  loadFacts[36] = "more than one jazz musician in history has been the victim of police brutality";
  loadFacts[37] = "many musical cultures privilege improvisation";
  loadFacts[38] = "you can sometimes tell from what time period a building was built based on the way the bricks look, if it has bricks to begin with";
  loadFacts[39] = "the perception and sales of certain food groups benefit from advertising and propaganda";
  loadFacts[40] = "5 + 5 = 10";
  loadFacts[41] = "you can use simple arithmetic to come up with very interesting rhythms";
  loadFacts[42] = "it is possible to substitute an egg in baking by using flax seeds";
  loadFacts[43] = "some interpretations of cognitive psychology topics have been influenced by the way computers work";
  loadFacts[44] = "there are many interesting stories we will never hear, simply because they were never preserved in any way";
  loadFacts[45] = "injera, a staple in ethiopian cuisine, is quite similar to dosa, a staple (of sorts) in south indian cuisine";
  loadFacts[46] = "there are seals to be found at la jolla, in san diego california";
  loadFacts[47] = "many people use pressure cookers to expedite the cooking of legumes cooked from their dried version";
  loadFacts[48] = "dogs may growl at you if you approach them while they are eating, and this is called 'resource guarding'";
  loadFacts[49] = "sometimes people will feel a lot, and say nothing";
  loadFacts[50] = "6 + 6 = 12";
  loadFacts[51] = "separating fact from opinion can be a useful skill";
  loadFacts[52] = "there are plenty of reasons to be angry";
  loadFacts[53] = "there is literature on how tactics in sports evolve over time";
  loadFacts[54] = "keyboard shortcuts will save you a lot of time";
  loadFacts[55] = "around a 1000 farm animals will have been slaughtered by the time you finish reading this sentence";
  loadFacts[56] = "not all facts are likely to be as interesting to you as others";
  loadFacts[57] = "many wounds can be outgrown";
  loadFacts[58] = "scientists have studied the cross-pollination of languages in multicultural societies";
  loadFacts[59] = "not all scientific evidence is equal, and some forms of research (i.e. a meta analysis) carries more weight than others (e.g. a single, isolated case study)"  
  loadFacts[60] = "7 + 7 = 14";
  loadFacts[61] = "parallels between politics and music theory have been made";
  loadFacts[62] = "sleep quality has a significant effect on human health";
  loadFacts[63] = "making art can sometimes require a lot of courage";
  loadFacts[64] = "the difficulty of a task is not necessarily proportional to how satisfied you may feel";
  loadFacts[65] = "a lot of people have tried to bestow their wisdom upon others";
  loadFacts[66] = "the is/ought gap is a logical fallacy of sorts, which is hard to explain";
  loadFacts[67] = "man, some people REALLY like to take walks";
  loadFacts[68] = "it easier to add water to cooking than to remove an excess of it";
  loadFacts[69] = "tomatoes are technically fruits, but who cares?";
  loadFacts[70] = "8 + 8 = 16";
  loadFacts[71] = "sharks are older than trees (evolutionarily-speaking)";
  loadFacts[72] = "bats are the only mammal that can fly";
  loadFacts[73] = "the marinas trench is the lowest point on earth";
  loadFacts[74] = "feudalism arose independently and simultaneously in japan and europe ";
  loadFacts[75] = "you may or may not share a certain % of your DNA with various animals";
  loadFacts[76] = "a liger is a cross between a lion and a tiger";
  loadFacts[77] = "a lot of modern technology was influenced by science fiction from the past";
  loadFacts[78] = "insects have evolved the ability to hear independently at least 20 times";
  loadFacts[79] = "there's (at least) two different kinds of people in this world";
  loadFacts[80] = "9 + 9 = 18";
  loadFacts[81] = "you should back up your computer, and also back up your backup";
  loadFacts[82] = "pierre boulez's surname is pronounced with a hard 'z'";
  loadFacts[83] = "all of the major continents used to be connected some time ago";
  loadFacts[84] = "1 billion seconds is over 31 years";
  loadFacts[85] = "man, some people really like driving in LA";
  loadFacts[86] = "sometimes, it's best to order the first item on the menu";
  loadFacts[87] = "there are people sleeping right now";
  loadFacts[88] = "purchasing gum is illegal in Singapore";
  loadFacts[89] = "being late can inconvenience you and others";
  loadFacts[90] = "10 + 10 = 20";
  loadFacts[91] = "not knowing when to stop talking may get you in trouble";
  loadFacts[92] = "smiling even when you are not happy may make you feel better";
  loadFacts[93] = "not all doors can be opened";
  loadFacts[94] = "measure twice, cut once";
  loadFacts[95] = "did you know that all multiples of 9 seem to be divisible by 9?";
  loadFacts[96] = "when electronics get wet, it is the minerals in the water that are more dangerous than the water itself";
  loadFacts[97] = "ants communicate with scent, and other animals do too";
  loadFacts[98] = "it may be more efficient to get things done faster";
  loadFacts[99] =  "90 degree angles are not very common in nature";
}