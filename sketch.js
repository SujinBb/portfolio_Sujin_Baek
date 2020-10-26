var r;
var b;
var words = ["#Sujin Baek","#CJ ENM","#1990", "#0905", "#Horse", "#Germany","#31","#Female","#FC Liverpool",
              "#A","#ENFJ-A","#Adobe","#Media Art","#Art","# Appreciating Movies",
              "#Travel","#Cycling","#Video","#MadMapper","#Coding","#Illustration","#Design",
              "#Web Art", "#Color","#Yangpyeong","#Köln","#164","#Art Museum","#Fine Art"];
var index = 0;
var button;
var _self;

function setup() { 
  createCanvas(1280,800);
  bgColor = color( random(255), random(255), random(255) );

  button = createButton('NEXT')
  button.mousePressed(LinkClik);
  button.position(1150,660);
  button.size(80,40);
  button.style("font-family", "Arial Narrow");
  button.style("background-color","#fff");
  button.style("color","#000");
  button.style('font-size', '20px');
 

} 

function draw() { 
  background(bgColor);
  fill(255);
  textFont('Impact');
  textSize(90);
  textAlign(CENTER);
  text(words[index],620,380);

}

function mousePressed() {
 bgColor = color( random(255), random(255), random(255) );
  index = floor(random(words.length));
  console.log(index);
  if (index == words.length) {
    index = 0;
  }
  
}

function LinkClik(){
 window.open("menu.html", _self);
}