let definition = "A conscious and open-hearted readiness to act with compassion, understanding, and courage in response to the needs of others or the world around us.";
let typingSpeed = 30;
let typedText = "";
let startTime;
let containerPadding = 20;
let showContent = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(64);
  fill(0);
  startTime = millis();
}

function draw() {
  background(255);

  if (!showContent) {
    textSize(64);
    textStyle(BOLD);
    text("CLICK", width / 2, height / 2);
  } else {
    textSize(64);
    text("Willingness", width / 2, height / 4);

    let boxX = width / 2 - 400;
    let boxY = height / 2 - 100;
    let boxWidth = 800;
    let boxHeight = 200;

    fill(255, 255, 255, 100);
    stroke(0);
    rect(boxX, boxY, boxWidth, boxHeight, 10);

    fill(0);
    textSize(24);
    textWrap(WORD);
    text(typedText, boxX + containerPadding, boxY + containerPadding, boxWidth - containerPadding * 2, boxHeight - containerPadding * 2);

    if (typedText.length < definition.length) {
      let currentTime = millis();
      if (currentTime - startTime > typingSpeed) {
        typedText += definition.charAt(typedText.length);
        startTime = currentTime;
      }
    }
  }
}

function mousePressed() {
  let clickX = width / 2;
  let clickY = height / 2;
  let clickWidth = textWidth("CLICK");
  let clickHeight = 64;

  if (mouseX > clickX - clickWidth / 2 && mouseX < clickX + clickWidth / 2 && mouseY > clickY - clickHeight / 2 && mouseY < clickY + clickHeight / 2) {
    showContent = true;
  }
}
