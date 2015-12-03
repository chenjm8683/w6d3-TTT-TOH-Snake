var SnakeView = require("./snake-view.js");//...require appropriate file
// var SnakeBoard = require("./board.js");

$(function () {
  var rootEl = $('.snake');
  var view = new SnakeView(rootEl);
});
