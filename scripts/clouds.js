// You are now about to witness the strength of street knowledge

// Generate background

generateClouds(2);

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateClouds(n) {
  if (getRandom(0, 1)) {
    l = ['left', 'right'];
  }
  else {
    l = ['right', 'left'];
  }

  let cloud = document.getElementById('clouds');
  for (var i = 0; i < n; ++i) {
    let cloudtype =
      ['./images/cloud1.png', './images/cloud2.png'][getRandom(0, 1)];
    let direction = l[i % 2];
    let size = getRandom(150, 250);
    let speed = getRandom(1, 3);
    let el = '<marquee behavior = "scroll" direction = "' + direction +
        '" scrollamount = "' + speed.toString() +
        '"><img draggable=false src = "' + cloudtype + '" style = "width: ' +
        size.toString() + 'px; opacity: 0.3; margin-top: 50px;"/> </marquee>';
    cloud.innerHTML += el;
  }
}
