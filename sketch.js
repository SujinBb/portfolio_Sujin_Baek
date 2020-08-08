var button;
var _self;

function setup() {
  createCanvas(1350,700);
  background(255);
  button = createButton('GO')
  button.mousePressed(LinkClik);
  button.position(650,420);
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
  textSize(250);
  textAlign(CENTER);
  text('MBC',655,395);
  var d = random(0, 255);
  var e = random(0, 255);
  var f = random(0, 255);
  fill(d,e,f);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
}

function LinkClik(){
 window.open("mbc_web.html", _self);
}
