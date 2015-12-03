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

	(function webpackMissingModule() { throw new Error("Cannot find module \"./js/main.js\""); }());
	(function webpackMissingModule() { throw new Error("Cannot find module \"./js/main.js\""); }());
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

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
	
		(function webpackMissingModule() { throw new Error("Cannot find module \"./js/main.js\""); }());
		__webpack_require__(1);
		(function webpackMissingModule() { throw new Error("Cannot find module \"./bundle.js\""); }());
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		var SnakeView = __webpack_require__(2);//...require appropriate file
		// var SnakeBoard = require("./board.js");
		
		$(function () {
		  var rootEl = $('.snake');
		  var view = new SnakeView(rootEl);
		});
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		var SnakeBoard = __webpack_require__(3);
		
		function View($rootEl) {
		  this.board = new SnakeBoard();
		  this.$root = $rootEl;
		  this.eventHandlers();
		  this.render();
		  // this.step();
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
		    window.setInterval(this.board.snake.move.bind(this), 1000);
		    this.render();
		  },
		
		  render: function() {
		    for (var i = 0; i < 20; i++) {
		      for (var j = 0; j < 20; j++) {
		        var $div = $('<div>');
		        $div.addClass('row-'+i);
		        $div.addClass('col-'+j);
		        this.$root.append($div);
		      }
		    }
		  }
		});
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Snake = __webpack_require__(4);
		
		function Board(){
		  this.snake = new Snake();
		}
		
		module.exports = Board;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		function Snake(){
		  this.dirs = ["n", "e", "s", "w"];
		  this.dir = "e";
		  this.segments = [[1,1],[2,1],[3,1],[4,1]];
		
		}
		
		$.extend(Snake.prototype, {
		  move: function(){
		    this.segments.forEach(function(segment) {
		      //add shit
		      switch (this.dir) {
		        case "e":
		        segment[0] += 1;
		        break;
		        case "s":
		        segment[1] -= 1;
		        break;
		        case "w":
		        segment[0] -= 1;
		        break;
		        case "n":
		        segment[1] += 1;
		        break;
		      }
		    });
		  },
		
		  turn: function(direction){
		    this.dir = direction;
		  }
		});
		
		module.exports = Snake;
	
	
	/***/ }
	/******/ ]);
	//# sourceMappingURL=bundle.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map