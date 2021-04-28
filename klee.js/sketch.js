function setup() {
  createCanvas(1024,768);
  background(209,212,183);
  
  //top left corner
  fill(170,155,132);
  noStroke();
  quad(0,0,48,0,68,75,0,371);
  
  fill(115,110,88);
  triangle(48,0,101,0,68,75);
  
  //green/brown shape near top left
  fill(119,135,111);
  stroke(85,105,81);
  strokeWeight(4);
  triangle(129,0,273,0,138,80);
  
  fill(154,142,118);
  noStroke();
  quad(136,82,275,0,492,0,143,190);
  // noFill();
  // stroke(0);
  arc(-58,-590,1610,1610,.825,HALF_PI-.254,OPEN)
  noStroke();
  
  //left middle blob
  fill(182,173,134);
  quad(30,230,392,302,440,377,0,371);
  
  
  //top right
  fill(147,150,123);
  triangle(900+32,0,1000+24,0,1024,158);
  
  //circle
  fill(168,152,119);
  arc(690,193,(690-548)*2,(193-23)*2,HALF_PI,PI+HALF_PI);
  arc(775,204,(909-775)*2,(193-44)*2,PI+HALF_PI,HALF_PI);
  
  //black quad
  fill(12,6,3);
  quad(0,371,660,380,318,768,0,768);
  
  //lower right corner
  fill(80,136,99);
  triangle(0,555,72,768,0,768);
  
  //greens to right of black quad
  fill(70,83,56);
  quad(660,380,776,369,503,768,318,768);
  
  fill(79,153,118);
  quad(776,369,923,360,700,768,503,768);
  
  //right edge
  fill(61,74,48);
  quad(923,360,1024,350,1024,491,938,491);
  triangle(897,405,923,359,940,495);
  
  //dark grey diamond
  fill(75,94,72);
  quad(897,405,945,503,888,594,838,516);
  
  //right edge black tri
  fill(27,23,11);
  triangle(937,490,1024,491,1024,612)
  
  //lower rihgt corner
  fill(86,145,119);
  quad(937,490,1024,612,1004,768,888,594)
  triangle(1024,612,1024,768,1003,768)
  
  //light greenish diamond
  fill(107,132,107);
  quad(838,516,888,594,835,699,792,600)
  
  //light greenish diamond
  fill(117,167,136);
  quad(792,600,835,699,795,768,700,768)
}

function draw() {
  
}