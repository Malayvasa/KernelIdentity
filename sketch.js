let colors = ["#5BF1CD",
              "#02E2AC",
              "#11BC92",
              "#FFFA7F",
              "#FFCC00",
              "#FFA800",
              "#212144",
              "#6F3FF5",
              "#8C65F7",
              "#55505C",
              "#5932C4",
              "#FFFFFF"];
let seed = 1000;
let name = "Lorem Ipsum";
let img;

function preload(){
  img = loadImage("logo.png");
}

function setup() {
  rectMode(CENTER);
  createCanvas(500, 525);
  for (var i = 0; i < name.length; i++) {
    seed=seed+name.charCodeAt(i);
  }
  console.log("RSeed :"+seed);
  
  randomSeed(seed);
  background(20);
  noStroke();
  
  let tiles = 5;
  let tileWidth = width/tiles;
  
  for(let i=0; i< tiles; i++){
    for(let j=0; j< tiles; j++){
      let Fill1 = floor(random(0,colors.length));
      let Fill2 = 0;
      while(Fill1 == Fill2){
        Fill2 = floor(random(0,colors.length));
      }
      let Fill3 = 0;
      while(Fill3 == Fill2){
        Fill3 = floor(random(0,colors.length));
      }
      
      fill(colors[Fill1]);
      square(i*tileWidth + tileWidth/2,
           j*tileWidth + tileWidth/2,
           tileWidth);
      
      maxR = random(30,tileWidth-20);
      fill(colors[Fill2]);
      circle(i*tileWidth + tileWidth/2,
           j*tileWidth + tileWidth/2,
           maxR);
      
      fill(colors[Fill3]);
      circle(i*tileWidth + tileWidth/2,
           j*tileWidth + tileWidth/2,
           random(20,maxR));
    }
  }
  
  fill(255);
  square(width/2,height/2-12.5,100);
  imageMode(CENTER);
  image(img,width/2,height/2-12.5,60,60);
  
  textFont('Space Mono');
  textAlign(CENTER);
  text("Designed & Coded : @malayvasa" , 250,515);
}