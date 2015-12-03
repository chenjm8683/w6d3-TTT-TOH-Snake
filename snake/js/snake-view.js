var SnakeBoard = require("./board.js");

function View(rootEl) {
  this.board = new SnakeBoard();
  this.$root = rootEl;
  this.setup();
  this.eventHandlers();
  window.setInterval(this.step.bind(this), 1000);
}

$.extend(View.prototype, {
  eventHandlers: function(){
    this.$root.on('keydown', this.handleKeyEvent.bind(this));
  },

  handleKeyEvent: function(event) {
    var keyCode = event.keyCode;

    var direction = String.fromCharCode(keyCode);

    this.board.snake.turn(direction);
  },

  step: function() {
    this.board.snake.move();
    this.render();
  },

  setup: function() {
    for (var i = 0; i < 20; i++) {
      for (var j = 0; j < 20; j++) {
        var $div = $('<div>');
        $div.addClass('row-'+i);
        $div.addClass('col-'+j);
        this.$root.append($div);
      }
    }
  },

  render: function(){
    $('div').removeClass('shown');

    var snakeSegments = this.board.snake.segments;

    snakeSegments.forEach(function(pos){
        var row = pos[0];
        var col = pos[1];
      // console.log(pos);

        $('.snake').find('.row-'+row).filter(".col-"+col).addClass('shown');

    });

  }



});

module.exports = View;
