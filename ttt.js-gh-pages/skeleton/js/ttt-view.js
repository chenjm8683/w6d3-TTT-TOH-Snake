var View = function (game, $el) {
  this.game = game;
  this.$el = $el;

};

View.prototype.bindEvents = function () {
  this.$el.on('click', 'li', this.makeMove.bind(this));
};

View.prototype.makeMove = function (e) {
  var $square = $(e.currentTarget);
  var pos = $square.data("pos"); // grab the data

  if (!this.game.board.isEmptyPos(pos)) {
    alert("Invalid move!");
  } else {
    if (this.game.currentPlayer === "x"){
      $square.append('<div class="x">X</div>');
    } else {
      $square.append('<div class="o">O</div>');
    }

    this.game.playMove(pos);
    if (this.game.winner() !== null) {
      alert(this.game.winner() + " wins!");
      this.$el.off();
    } else if (this.game.isOver()) {
      alert("No ones a winner :(");
      this.$el.off();
    }
  }
};

View.prototype.setupBoard = function () {
  this.$el.append('<ul></ul>');

  var $ul = $('ul');

  for (var i = 0; i < 9; i++) {
    var x = Math.floor(i / 3);
    var y = i % 3;
    var pos = [x, y];
    var $li = $('<li>');
    $li.data("pos", pos);
    $ul.append($li);

  }


};

module.exports = View;
