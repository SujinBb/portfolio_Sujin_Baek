var button;
var _self;

function setup() {
  createCanvas(1280,800);
  background(255);
  button = createButton('GO')
  button.mousePressed(LinkClik);
  button.position(580,420);
  button.size(50,40);
 button.style("font-family", "Impact");
  button.style("background-color","#fff");
 button.style("color","#000");
 button.style('font-size', '20px');
}

function randomColor() {
  var a = random(0, 255);
  var b = random(0, 255);
  var c = random(0, 255);
  background(a, b, c);
}

function draw() { 
  fill(255);
  textFont('Impact');
  textSize(90);
  textAlign(CENTER);
  text('GENTLE MONSTER',620,380);
  var d = random(0, 255);
  var e = random(0, 255);
  var f = random(0, 255);
  fill(d,e,f);
  noStroke();
  ellipse(mouseX, mouseY, 40, 40);
}

function LinkClik(){
 window.open("gentlemonster_portfolio.html", _self);
}