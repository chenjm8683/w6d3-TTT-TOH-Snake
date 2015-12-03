function View(game, rootEl) {
  this.firstTower = null;
  this.secondTower = null;
  this.game = game;
  this.$root = rootEl;
  this.registerEvents();
  this.setupTowers();
}

$.extend(View.prototype, {
  setupTowers: function(){
    for (var i = 0; i < 3; i++) {
      var $ul = $('<ul>');
      $ul.data("tower", i);
      this.$root.append($ul);
      for (var j = 1; j <= 3; j++) {
        var $li = $('<li>');
        $li.data("disk", j);
        $li.addClass('disk-' + j);
        if (i === 0) {
          $li.addClass('shown');
        }
        $ul.append($li);
      }
    }

  },

  registerEvents: function() {
    this.$root.on('click', 'ul', this.clickTower.bind(this));
  },

  clickTower: function(e){
    var $tower = $(e.currentTarget);

    if (this.firstTower === null) {
      this.firstTower = $tower.data("tower");
    } else {
      this.secondTower = $tower.data("tower");
      if (this.game.isValidMove(this.firstTower, this.secondTower)) {
        this.game.move(this.firstTower, this.secondTower);
        this.render();
        if (this.game.isWon()) {
          alert("You Win!");
          this.$root.off();
        }
        this.firstTower = null;
        this.secondTower = null;
      } else {
        alert("Invalid move!");
        this.firstTower = null;
        this.secondTower = null;
      }
    }
  },

  render: function(){
    var first = this.firstTower + 1;

    var firstTower = $('ul:nth-child(' + first + ')');
    var disk = firstTower.find('.shown').eq(0);
    disk.toggleClass('shown');

    var second = this.secondTower + 1;
    var secondTower = $('ul:nth-child(' + second + ')');

    var number = disk.data("disk");

    secondTower.find('.disk-' + number).toggleClass('shown');





    // render the first time
    // //we know first tower and secondTower
    //
    // go to the first tower...last child toggle class
    // go to the second tower... last child toggle class

    // first 'shown' tower, toggle class, grab size;
    //
    // second tower, toggle class of nth-child(size);
    //

  }



});

module.exports = View;
