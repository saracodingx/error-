let colorlist = ['blue', '#03FF0D', 'rgb(255,10,10)'];
let fontSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#000000");
  
  // Determine appropriate font size based on screen size
  if (windowWidth > windowHeight) { // Landscape orientation (Desktop)
    fontSize = windowWidth / 50; // Adjust the division factor to suit your preference
  } else { // Portrait orientation (Mobile)
    fontSize = windowWidth / 20; // Adjust the division factor to suit your preference
  }
}

function draw() {
  noStroke();

  fill(random(colorlist));
  ellipse(mouseX, mouseY, 80, 80);
  
  // Set text alignment to center
  textAlign(CENTER, CENTER);
  textSize(fontSize);
  text("ERROR: YOUR PRIVACY DOESN'T EXIST", width/2, height/2);
}