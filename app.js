// CSS Loading

function loadCSS(href){
  var ss = window.document.createElement('link'),
      ref = window.document.getElementsByTagName('head')[0];

  ss.rel = 'stylesheet';
  ss.href = href;

  // temporarily, set media to something non-matching to ensure it'll
  // fetch without blocking render
  ss.media = 'only x';

  ref.parentNode.insertBefore(ss, ref);

  setTimeout( function(){
    // set media back to `all` so that the stylesheet applies once it loads
    ss.media = 'all';
  },0);
}

loadCSS('includes/fontello/css/fontello.css');
loadCSS('includes/vertical-timeline/css/style.css');
loadCSS('main.css');


// Generate background

intro.style.height = window.innerHeight.toString() + 'px';
var introName = document.getElementById('intro-name');
introName.style.marginTop = (intro.clientHeight * .18).toString() + 'px';

generateClouds(2);

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
    var cloudtype = ['cloud1.png', 'cloud2.png'][getRandom(0,1)];
    var dir = l[i%2];
    var size = getRandom(150,250);
    var speed = getRandom(1,3);
    var el = '<marquee behavior = "scroll" direction = "' + dir +
        '" scrollamount = "' + speed.toString() + '"><img draggable=false src = "' + cloudtype +
        '" style = "width: ' + size.toString() + 'px; opacity: 0.3; margin-top: 50px;"/> </marquee>';
    cloud.innerHTML += el;
  }
}
