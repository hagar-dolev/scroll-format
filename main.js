
var container = $(".circle-container");

var numCircles = 30;

var minX = 0;
var maxX = -container.width();

var minY = 200;
var maxY = 800;

var minSize = 20;
var maxSize = 100;

var minDelay = 0;
var maxDelay = 2;

var minOpacity = 0.4;
var maxOpacity = 0.8;

var minDuration = 2;
var maxDuration = 20;

for (var i = 0; i < numCircles; i++) {
  var circle = $("<div class='circle'/>").appendTo(container);
  animateCircle(circle, true);
}

$(window).resize(onResize);

function animateCircle(circle, firstRun) {
  
  var x = random(minX, maxX);
  var y = random(minY, maxY);
  var size = random(minSize, maxSize);
  var delay = random(minDelay, maxDelay);
  var opacity = random(minOpacity, maxOpacity);
  var duration = random(minDuration, maxDuration);
  
  var myColors  =["aqua","red","green","yellow", "purple"];
  var colorPicker = Math.ceil(5* Math.random() -1);
  var colorpick = myColors[colorPicker];

  TweenLite.set(circle, {
    x: x,
    y: -size,
    width: size,
    height: size,
    autoAlpha: opacity,
    background: colorpick
  });
  
  var tween = TweenLite.to(circle, duration, {
    autoAlpha: 0,
    y: y,    
    delay: delay,
    onComplete: animateCircle,
    onCompleteParams: [circle]
  });
  
  if (firstRun) {
    tween.time(random(duration));
  }
}

function onResize() {
  maxX = -container.width();
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}


