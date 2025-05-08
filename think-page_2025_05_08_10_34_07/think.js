let question = "How do YOU want your world to look like?";
let words = question.split(" ");
let currentWordIndex = 0;
let typedText = "";
let wordPositions = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  textStyle(BOLD);
  fill(0);
}

function draw() {
  background(255);
  for (let i = 0; i < wordPositions.length; i++) {
    text(wordPositions[i].word, wordPositions[i].x, wordPositions[i].y);
  }
}

function mousePressed() {
  if (currentWordIndex < words.length) {
    let word = words[currentWordIndex];
    let x = random(width);
    let y = random(height);

    wordPositions.push({ word: word, x: x, y: y });

    currentWordIndex++;
  }
}
