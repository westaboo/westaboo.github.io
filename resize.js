var intro = document.getElementById('intro');
intro.style.height = intro.clientHeight.toString() + 'px';

var introName = document.getElementById('intro-name');
introName.style.marginTop = (intro.clientHeight * .18).toString() + 'px';

var introLink1 = document.getElementById('intro-link-1');
var introLink2 = document.getElementById('intro-link-2');
introLink1.style.marginTop = (intro.clientHeight * .075).toString() + 'px';
introLink2.style.marginTop = (intro.clientHeight * .075).toString() + 'px';
