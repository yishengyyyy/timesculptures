
var font;

var time;

var t;

var x4;

var y5;

var interval;

var k;

var angle;

var angle2;

var x0;

var y0;


function setup() {

    initializeFields();
    createCanvas(1700, 1080);
    // font = createFont("Arial", 30);
    fill(255);
    background(0, 0, 0);
    strokeWeight(1);
    colorMode(RGB);
}

function draw() {
    drawSculpture();
    stroke(random(255), (255), random(255));
    strokeWeight(1);
    rotate(PI / 30);
    angle2 += -0.001;
    rotate(angle);
    fill(random(255), random(255), 255);
    t = interval - int(millis() / 1000);
    time = nf(t, 5);
    textSize(200);
    text(time, 200, 800);
    // drawSculpture2();
}

function drawSculpture() {
    stroke((255), random(255), random(255));
    strokeWeight(1);
    rotate(PI / 30);
    angle += 0.001;
    rotate(angle);
    fill(random(255), random(255), 255);
    t = interval - int(millis() / 1000);
    time = nf(t, 5);
    textSize(200);
    text(time, 100, 160);
}

function drawSculpture2() {
    stroke(random(255), random(255), 255);
    strokeWeight(1);
    rotate(PI / 30);
    angle2 += -0.001;
    rotate(angle);
    fill(random(255), random(255), 255);
    t = interval - int(millis() / 1000);
    time = nf(t, 5);
    textSize(200);
    text(time, 200, 800);
}

function initializeFields() {
    font = null;
    time = "10000";
    t = 0;
    x4 = -10;
    y5 = 160;
    x0 = 200
    y0 = 800;
    interval = 10000;
    k = 2;
    angle = 0;
    angle2 = 0;
}

