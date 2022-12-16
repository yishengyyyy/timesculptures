
var font;

var time;

var t;

var x3;

var x4;

var x5;

var interval;

var x0;

var y0;

var k;

var angle;

var angle2;

function setup() {
    initializeFields();
    createCanvas(1700, 1080);
    textFont('Arial');
    fill(255);
    background(0, 0, 0);
    strokeWeight(1);
    colorMode(RGB);
}

function draw() {
    drawSculpture();
}

function drawSculpture() {
    stroke(random(255), random(255), 255);
    strokeWeight(1);
    scale(0.8);
    rotate(PI / 30);
    angle += 0.001;
    rotate(angle);
    fill(random(255), random(255), 255);
    t = interval - int(millis() / 4000);
    time = nf(t, 3);
   textFont('Arial');
    textSize(200);
    text(time, -10, 160);
    
    var Hr = hour();
    var Min = minute();
    var Sec = second();
    var Hrs = str(Hr);
    var Mins = str(Min);
    if (Mins.length < 2) {
        Mins = "0" + Mins;
    }
    var Secs = str(Sec);
    if (Secs.length < 2) {
        Secs = "0" + Secs;
    }
    var HMS = Hrs + ":" + Mins + ":" + Secs;
     textFont('Arial');
  textSize(50);
    text(HMS, x3, -10);
   
    x3 = x3 + 2;
    if (x3 == 2000) {
        x3 = 10;
    }
}

function initializeFields() {
    font = null;
    time = "0100";
    t = 0;
    x3 = 200;
    x4 = 500;
    x5 = 100;
    interval = 100;
    x0 = 100;
    y0 = 5;
    k = 2;
    angle = 0;
    angle2 = 1;
}

