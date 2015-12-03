var HanoiView = require("./hanoi-view.js");//...require appropriate file
var HanoiGame = require("../../hanoi-core-solution/src/game.js");

$(function () {
  var rootEl = $('.hanoi');
  var game = new HanoiGame();
  var view = new HanoiView(game,rootEl);
});
