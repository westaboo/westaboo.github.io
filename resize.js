var intro = document.getElementById('intro');
intro.style.height = intro.clientHeight.toString() + 'px';

var introName = document.getElementById('intro-name');
introName.style.marginTop = (intro.clientHeight * .18).toString() + 'px';

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
