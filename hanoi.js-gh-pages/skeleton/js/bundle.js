/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var HanoiView = __webpack_require__(2);//...require appropriate file
	var HanoiGame = __webpack_require__(1);

	$(function () {
	  var rootEl = $('.hanoi');
	  var game = new HanoiGame();
	  var view = new HanoiView(game,rootEl);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Game () {
	  this.towers = [[3, 2, 1], [], []];
	};

	Game.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
	  var startTower = this.towers[startTowerIdx];
	  var endTower = this.towers[endTowerIdx];

	  if (startTower.length === 0) {
	    return false;
	  } else if (endTower.length == 0) {
	    return true;
	  } else {
	    var topStartDisc = startTower[startTower.length - 1];
	    var topEndDisc = endTower[endTower.length - 1];
	    return topStartDisc < topEndDisc;
	  }
	};

	Game.prototype.isWon = function () {
	  // move all the discs to the last or second tower
	  return (this.towers[2].length == 3) || (this.towers[1].length == 3);
	};

	Game.prototype.move = function (startTowerIdx, endTowerIdx) {
	  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
	    this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
	    return true;
	  } else {
	    return false;
	  }
	};

	Game.prototype.print = function () {
	  console.log(JSON.stringify(this.towers));
	};

	Game.prototype.promptMove = function (reader, callback) {
	  this.print();
	  reader.question("Enter a starting tower: ", function (start) {
	    var startTowerIdx = parseInt(start);
	    reader.question("Enter an ending tower: ", function (end) {
	      var endTowerIdx = parseInt(end);
	      callback(startTowerIdx, endTowerIdx)
	    });
	  });
	};

	Game.prototype.run = function (reader, gameCompletionCallback) {
	  this.promptMove(reader, (function (startTowerIdx, endTowerIdx) {
	    if (!this.move(startTowerIdx, endTowerIdx)) {
	      console.log("Invalid move!");
	    }

	    if (!this.isWon()) {
	      // Continue to play!
	      this.run(reader, gameCompletionCallback);
	    } else {
	      this.print();
	      console.log("You win!");
	      gameCompletionCallback();
	    }
	  }).bind(this));
	};

	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);