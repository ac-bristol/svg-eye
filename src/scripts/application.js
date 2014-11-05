
var s = Snap("#svg");

var circle_1 = s.circle(320, 220, 140);
var circle_2 = s.circle(230, 220, 140);
 
var circles = s.group(circle_1, circle_2);
 
var ellipse = s.ellipse(275, 220, 150, 80);
 
circles.attr({
  fill: 'red',
  fillOpacity: 0.6,
  mask: ellipse
});
 
ellipse.attr({
  fill: 'red',
  opacity: 0.8
});

function blink(){
  ellipse.animate({ry:1}, 220, function(){
    ellipse.animate({ry: 90}, 300);
  });
};

setInterval(blink, 3000);