/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var SnakeView = __webpack_require__(1);//...require appropriate file
	// var SnakeBoard = require("./board.js");
	
	$(function () {
	  var rootEl = $('.snake');
	  var view = new SnakeView(rootEl);
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var SnakeBoard = __webpack_require__(2);
	
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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Snake = __webpack_require__(3);
	
	function Board(){
	  this.snake = new Snake();
	}
	
	module.exports = Board;


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map