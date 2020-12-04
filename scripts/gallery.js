let GALLERY_QUERY_PARAM = "g";
let DEFAULT_SIZE = "150px";
let DEFAULT_COLOR = "#000";

populateGallery(getGalleryQueryParam());

/****************************** HELPER FUNCTIONS ******************************/

function _getGallery(gallery_title) {
  if (typeof gallery_title !== "string") {
    throw "gallery_title must be string."
  }
  return _gallery.galleryMap[gallery_title];
}

function _createSignature() {
  return "&#10046;&nbsp;Zeeshan Hanif&nbsp;&#10046;";
}

function _createItemTag(name) {
  if (typeof name !== "string") {
    throw "name must be string."
  }

  let tag_name = document.createElement("p");
  tag_name.innerHTML = name;

  let tag = document.createElement("div");
  tag.innerHTML = tag_name.outerHTML + _createSignature();
  tag.setAttribute("class", "gallery-item-tag");

  return tag.outerHTML;
}

function _createItemPiece(src, size, color) {
  if (typeof src !== "string") {
    throw "src must be string."
  }
  if (typeof color !== "string") {
    throw "color must be string."
  }
  if (typeof size !== "string") {
    throw "size must be string."
  }

  let piece = document.createElement("div");
  piece.style.background = "url(" + src + ")";
  piece.style.backgroundSize = size;
  piece.style.color = color;
  piece.setAttribute("class", "gallery-item-piece");

  return piece.outerHTML;
}

function _createItem(item) {
  if (typeof item !== "object") {
    throw "item must be object."
  }
  if (item.src == null) {
    throw "gallery item missing field src."
  }
  if (item.name == null) {
    throw "gallery item missing field name."
  }

  let size = item.size != null ? item.size : DEFAULT_SIZE;
  let color = item.color != null ? item.color : DEFAULT_COLOR;

  let gallery_item = document.createElement("div");
  gallery_item.innerHTML = _createItemPiece(item.src, size, color) +
    _createItemTag(item.name);
  gallery_item.setAttribute("class", "gallery-item animated fade");

  return gallery_item.outerHTML;
}

function _createItems(items) {
  return items.map(_createItem).join('');
}

function populateGallery(gallery_name) {
  let gallery = _getGallery(gallery_name);
  if (gallery.items == null) {
    throw "gallery has missing field items.";
  }
  if (typeof gallery.items !== "object") {
    throw "gallery items must be a list.";
  }
  if (gallery.items.length <= 0 || gallery.items.length > 3) {
    throw "gallery must contain 1-3 items.";
  }

  let gallery_element = document.getElementById("gallery");
  if (gallery.items.length > 1) {
    gallery_element.setAttribute("class", "mobile-friendly-multigallery");
  }
  gallery_element.innerHTML = _createItems(gallery.items);
}

function _getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getGalleryQueryParam() {
  return _getParameterByName(GALLERY_QUERY_PARAM);
}
