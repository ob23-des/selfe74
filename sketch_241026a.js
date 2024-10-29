function setup() {
  createCanvas(500, 500);
  background(200);
  
  fill('#F8E5AF');
  ellipse(100,250,50,70);
  
  fill('#F8E5AF');
  ellipse(400,250,50,70);
  
  fill('#F8E5AF');
  ellipse(250,250,300,350);
  
  fill(255,255,255);
  ellipse(190,200,50,25);
  
  fill(0,0,0);
  circle(190,200,25);

  fill(255,255,255);
  ellipse(310,200,50,25);
  
  fill(0,0,0);
  circle(310,200,25);
  
  for (let y = 70; y < 120; y += 10) {
    line(300, y, 350, y+20);
  }
  
   for (let y = 70; y < 120; y += 10) {
    line(200, y, 120, y+50);
    line(120,y+50,200-y,220);
  }
  
   for (let y = 70; y < 120; y += 10) {
    line(200, y, 300, y);
  }
  
  fill('#C8164C');
  arc(250,330,60,30,0,PI);
  
  line(250,220,230,260);
  line(230,260,250,260);
}


function draw() {

}
