
var font;

var time;

var t;

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
    colorMode(HSB);
}

function draw() {
    drawSculpture1();
    drawSculpture2();
    drawSculpture2();
    // drawSculpture3();
    drawSculpture4();
}

function drawSculpture1() {
    stroke(random(255), (255), random(255));
    textSize(90);
    strokeWeight(1);
    scale(0.5);
    translate(800, 500);
    rotate(PI / 30);
    angle2 += -0.0009;
    rotate(angle2);
    fill(random(255), random(255), 255);
   
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
    text(HMS, 500, 500);
}

function drawSculpture2() {
    textSize(90);
    stroke(random(255), random(255), 255);
    strokeWeight(1);
    scale(0.9);
    translate(800, 500);
    rotate(PI / 40);
    angle += 0.0009;
    rotate(angle);
    fill(random(255), random(255), 255);
   
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
    text(HMS, 500, 500);
}

function drawSculpture3() {
    textSize(90);
    stroke(random(255), random(255), 255);
    strokeWeight(1);
    scale(1);
    translate(1800, 500);
    rotate(PI / 40);
    angle += -0.0009;
    rotate(angle);
    fill(random(255), random(255), 255);
   
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
    text(HMS, 500, 500);
}

function drawSculpture4() {
    textSize(90);
    stroke(random(255), random(255), 255);
    strokeWeight(1);
    scale(1);
    translate(15000, 3000);
    rotate(PI / 40);
    angle += -0.0009;
    rotate(angle);
    fill(random(255), random(255), 255);
   
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
    text(HMS, 500, 500);
}

function initializeFields() {
    font = null;
    time = "0100";
    t = 0;
    interval = 100;
    x0 = 100;
    y0 = 5;
    k = 2;
    angle = 0;
    angle2 = 2;
}

