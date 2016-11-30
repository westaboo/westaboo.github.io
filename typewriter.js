function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

sleep(1000).then(() => {
  var str = "<h2>Developer and Designer</h2>",
    i = 0,
    isTag,
    text;

  (function type() {
    text = str.slice(0, ++i);
    if (text === str) return;

    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 120);
  }());
});
