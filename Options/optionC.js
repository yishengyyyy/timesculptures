
var font;

var time;

var t;

var x4;

var interval;

var x0;

var y0;

var k;

var angle;

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
    
    stroke(random(255), random(255), 255);
    strokeWeight(1);
    rotate(PI / 30);
    angle += -0.0009;
    rotate(angle);
    fill(random(255), random(255), 255);
    t = interval - int(millis() / 4000);
    time = nf(t, 3);
    textSize(200);
    text(time, x4, 160);
    x4 = x4 + 1;
    if (x4 == 1000) {
        x4 = 550;
    }
    
}

function drawSculpture() {
    stroke(random(255), random(255), 255);
    strokeWeight(1);
    rotate(PI / 30);
    angle += 0.001;
    rotate(angle);
    fill(random(255), random(255), 255);
    t = interval - int(millis() / 4000);
    time = nf(t, 3);
    textSize(200);
    text(time, x4, 160);
    x4 = x4 + 1;
    if (x4 == 1000) {
        x4 = 550;
    }
}

function drawSculpture2() {
    stroke(random(255), random(255), 255);
    strokeWeight(1);
    rotate(PI / 30);
    angle += 0.001;
    rotate(angle);
    fill(random(255), random(255), 255);
    t = interval - int(millis() / 4000);
    time = nf(t, 3);
    textSize(200);
    text(time, 500, y5);
    y5 = y5 + 1;
    if (y5== 900) {
        x5 = 1100;
    }
}

function initializeFields() {
    font = null;
    time = "0100";
    t = 0;
    x4 = 10;
    interval = 100;
    x0 = 100;
    y0 = 5;
    k = 2;
    angle = 0;
}

