
// Setup code goes here
function setup() {
  createCanvas(800, 800);

 }


// Draw code goes here
function draw() {
  background(80);


  fill(204, 101, 192, 127);
  rect(35, 220, 220, 60);
  ellipse(60, 60, 80, 80);
  triangle(300, 200, 320, 200, 310, 180);
  arc(120, 60, 80, 80, 0, HALF_PI);
  line(500, 500, 800, 800);
  quad(300, 400, 350, 450, 500, 550, 600, 650);
  ellipse(500, 90, 60, 120);
  quad(158, 40, 200, 30, 300, 50, 400, 100);
  triangle(800, 600, 800, 300, 650, 500);
  arc(390, 400, 80, 80, QUARTER_PI, PI+QUARTER_PI);
  

}
