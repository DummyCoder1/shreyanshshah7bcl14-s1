var colors = ["white","orange","red","green","pink","yellow"];

function setup() {
  createCanvas(innerWidth, innerHeight);
  background("white");
}

function draw() {
  var y =50;
  for (i = 0; i < colors.length; i++){
     currentColor = new Ball(width/2,y,50,colors[i]);
     y = y + 50;
     currentColor.appear();
 }
}
