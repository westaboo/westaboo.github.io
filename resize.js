var intro = document.getElementById('intro');
intro.style.height = intro.clientHeight.toString() + 'px';

var introName = document.getElementById('intro-name');
introName.style.marginTop = (intro.clientHeight * .18).toString() + 'px';
