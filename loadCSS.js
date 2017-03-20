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
  },0);}

loadCSS('includes/bootstrap/css/bootstrap.min.css');
loadCSS('includes/fontello/css/fontello.css');
loadCSS('includes/vertical-timeline/css/style.css');
loadCSS('main.css');
