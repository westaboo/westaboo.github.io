var intro = document.getElementById('intro');
intro.style.height = intro.clientHeight.toString() + 'px';

var introName = document.getElementById('intro-name');
introName.style.marginTop = (intro.clientHeight * .18).toString() + 'px';

generateClouds(3);

function hideProjects() {
  event.preventDefault();
  document.getElementById("projects").style.display = "None";
  document.getElementById("work").style.display = "";
  document.getElementById("filter-projects").style.fontWeight = "";
  document.getElementById("filter-work").style.fontWeight = "bold";
};

function hideWork() {
  event.preventDefault();
  document.getElementById("work").style.display = "None";
  document.getElementById("projects").style.display = "";
  document.getElementById("filter-work").style.fontWeight = "";
  document.getElementById("filter-projects").style.fontWeight = "bold";
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateClouds(n) {
  if(getRandom(0,1)) {l = ['left', 'right'];}
  else {l = ['right', 'left'];}

  var cloud = document.getElementById('clouds');
  for(var i = 0; i < n; ++i) {
    var dir = l[i%2];
    var size = getRandom(150, 200);
    var speed = getRandom(1,2);
    var height = 0;
    var el = '<marquee behavior = "scroll" direction = "' + dir +
      '" scrollamount = "' + speed.toString() + '"><img src = "cloud.png" style = "width: ' +
      size.toString() + 'px; opacity: 0.2;"/> </marquee>';
    cloud.innerHTML += el;
  }
}
