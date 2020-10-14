"use strict";
var APP_ELEMENT = document.getElementById('app');
var createPoint = function (event) {
    return { x: event.pageX, y: event.pageY };
};
var createImageElement = function (src) {
    var element = new Image(80, 80);
    element.src = src;
    return element;
};
var generateElement = function (point) {
    var element = createImageElement('./js.svg');
    element.setAttribute('style', "top: " + point.y + "px; left: " + point.x + "px");
    return element;
};
var renderElement = function (element) {
    APP_ELEMENT === null || APP_ELEMENT === void 0 ? void 0 : APP_ELEMENT.appendChild(element);
};
var track = function (event) {
    var point = createPoint(event);
    var element = generateElement(point);
    renderElement(element);
};
var clean = function () {
    while (APP_ELEMENT === null || APP_ELEMENT === void 0 ? void 0 : APP_ELEMENT.firstChild) {
        APP_ELEMENT.removeChild(APP_ELEMENT.firstChild);
    }
};
document.addEventListener("mousemove", track);
document.addEventListener("dblclick", clean);
