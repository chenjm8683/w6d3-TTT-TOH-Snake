function Snake(){
  this.dirs = ["n", "e", "s", "w"];
  this.dir = "e";
  this.segments = [[1,1],[2,1],[3,1],[4,1]];

}

$.extend(Snake.prototype, {
  move: function(){
        console.log(this.dir);
    // for (var i = 0; i < this.segments.length; i++) {
    //   this.segments[i][0] += 1;
    // }


    this.segments.forEach(function(segment, index) {
      switch (this.dir) {
        case "e":
        this.segments[index][0] += 1;
        break;
        case "s":
        this.segments[index][1] -= 1;
        break;
        case "w":
        this.segments[index][0] -= 1;
        break;
        case "n":
        this.segments[index][1] += 1;
        break;
      }
    }.bind(this)
  );
  },

  turn: function(direction){
    this.dir = direction;
  }
});

module.exports = Snake;
