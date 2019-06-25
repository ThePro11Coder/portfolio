var waves=[];
var numWaves=20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i=0; i<numWaves; i++){
    waves.push(new Wave(i,30,height/4+(height/10)*(i*i)/numWaves,height/8+i*(height/20)));
  }
  colorMode(HSB);
}

function draw() {
  background(0);
  noStroke();
  for(var i=0; i<200; i+=10){
    fill(220,40-i/10,90,1);
    rect(0,i,width,i+10);
  }
  waves.forEach(function(w){
    w.run();
    w.show();
  });
}

function Wave(ind,n,y,disp){
  var verts=[];
  var nSeed=random(10);
  var nOff=random(10);
  var nStep=1/n;
  var nShift=0.005;
  var cHue=random(180,220);
  var cSat=40+ind*4;//random(30,50);
  var cBri=random(60,80);
  
  this.run=function(){
    nOff+=nShift;
    for(var i=0; i<n+1; i++){
      verts[i]={x: i*width/(n), y:noise(nSeed+i*nStep, nOff)*disp};
    }
  };
  
  this.show=function(){
    push();
    noStroke(0);
    fill(cHue,cSat, cBri,0.5);
    translate(0,y);
    beginShape();
    vertex(width, height);
    vertex(0,height);
    for(var i=0; i<n+1; i++){
      vertex(verts[i].x, verts[i].y);
    }
    endShape();
    pop();
  }
}