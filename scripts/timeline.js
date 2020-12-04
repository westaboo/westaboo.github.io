// You are now about to witness the strength of street knowledge

// Timeline toggles

function toggleTimeline(timeline, show_id) {
  let filter_id = "timeline-filter-" + timeline.id;
  if (timeline.id === show_id) {
    timeline.style.display = "";
    document.getElementById(filter_id).style.fontWeight = "bold";
  } else {
    timeline.style.display = "None";
    document.getElementById(filter_id).style.fontWeight = "";
  }
}

function showTimeline(show_id) {
  if (event != null) {
    event.preventDefault();
  }
  let timelines = Array.from(document.getElementById("cd-timeline").children);
  timelines.map(function(timeline) {
    toggleTimeline(timeline, show_id);
  });
}

// Generate timeline
_generateTimeLines([_timeline_projects, _timeline_work, _timeline_art]);

function _createTimeLineLink(timeline) {
  if (timeline.id == null) {
    throw "Timeline id cannot be null."
  }
  if (timeline.title == null) {
    throw "Timeline title cannot be null."
  }

  return "<a id = 'timeline-filter-" + timeline.id +
    "' onclick = 'showTimeline(`" + timeline.id + "`)'><li>" + timeline.title + "</li></a>";
}

function _createTimeLineLinks(timelines) {
  let timeline_links = document.getElementById("timeline-links");
  let separator = "<span style = 'color: white; font-size: 16px;'>|</span>";
  // This "x + separator + y.join(separator) + separator + z" makes me feel
  // disgusting, but I think this is generally more efficient than
  // "x.concat(y.concat(z)).join(separator)".
  timeline_links.innerHTML = timelines.map(_createTimeLineLink).join(separator);
}

/*
  Static header required by all timeline items.
*/
function _createItemImage() {
  return `<div class = 'cd-timeline-img cd-picture'>
    <img src = 'includes/vertical-timeline/img/cd-icon-location.svg'>
  </div>`;
}

/*
  Static gap used by all timeline items.
*/
function _createGap() {
  return "<div class = 'timeline-gap'></div>";
}

/*
  Creates a description from a work description. A description is either a
  string or list of strings. In the latter case, the description is itemized
  with bullet points.
*/
function _serializeItemDescription(description) {
  let itemized_description = document.createElement("div");
  itemized_description.setAttribute("class", "timeline-description");

  if (typeof description === "string") {
    itemized_description.innerText = description;
    itemized_description.style.textAlign = "center";
  } else {
    itemized_description.innerHTML = "• " +
      description.join(_createGap() + "• ");
  }
  return itemized_description.outerHTML + _createGap();
}

function _createItemDescription(description) {
  if (typeof description !== "object" && typeof description != "string") {
    throw "description must be type 'string' or an array of strings.";
  }

  return _serializeItemDescription(description);
}

function _createItemLink(link) {
  if (link == null || link.text == null) {
    return "";
  }

  let button = document.createElement("a");
  button.innerText = link.text;
  button.setAttribute("class", "timeline-link");

  if (link.url != null) {
    button.setAttribute("href", link.url);
    button.setAttribute("target", "_blank");
  }
  if (link.onclick != null) {
    button.setAttribute("onclick", link.onclick);
  }

  return button.outerHTML + _createGap();
}

function _createItemHeader(title, dates) {
  if (title == null) {
    throw "title cannot be null";
  }

  let embedded_date = "";
  if (typeof dates === "string" && dates.length > 0) {
    embedded_date = "<div class = 'timeline-header-dates'>" + dates +
      "</div>"
  }

  return "<div class = 'timeline-header'><div class = 'timeline-header-title'>"
    + title + "</div>" + embedded_date + "</div>";
}

function _createItemContent(item) {
  let item_content = document.createElement("div");
  item_content.setAttribute("class", "cd-timeline-content direction");

  item_content.innerHTML = _createGap() + [
    _createItemHeader(item.title, item.dates),
    item.description != null ? _createItemDescription(item.description) : "",
    _createItemLink(item.link),
  ].join(_createGap());

  return item_content.outerHTML;
}

function _createTimeLineItem(item) {
  return [
    "<div class = 'cd-timeline-block animated fade'>",
    _createItemImage(),
    _createItemContent(item),
    "</div>"
  ].join("");
}

function _createTimeLine(timeline) {
  if (timeline.id == null) {
    throw "Timeline id cannot be null.";
  }

  let timeLineContent = "";
  if (timeline.items != null) {
    timeLineContent = timeline.items.map(_createTimeLineItem).join("");
  }
  return "<span id = '" + timeline.id + "'>" +
    timeLineContent + "</span>";
}

function _createTimeLines(timelines) {
  let content = timelines.map(_createTimeLine).join("");
  document.getElementById("cd-timeline").innerHTML = content;
}

function _generateTimeLines(timelines) {
  _createTimeLineLinks(timelines);
  _createTimeLines(timelines);

  // Show the middle timeline by default.
  showTimeline(timelines[(timelines.length >> 1)].id);
}
