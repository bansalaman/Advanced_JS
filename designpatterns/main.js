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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _modelAddress = __webpack_require__(1);

	var _modelAddress2 = _interopRequireDefault(_modelAddress);

	var _viewAddress = __webpack_require__(2);

	var _viewAddress2 = _interopRequireDefault(_viewAddress);

	var _controllerAddress = __webpack_require__(3);

	var _controllerAddress2 = _interopRequireDefault(_controllerAddress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    var view = new _viewAddress2.default({
	        checkbox: document.getElementById('checkbox'),
	        payStName: document.getElementById('payStName'),
	        payCtName: document.getElementById('payCtName'),
	        shipStName: document.getElementById('shipStName'),
	        shipCtName: document.getElementById('shipCtName')
	    });
	    var controller = new _controllerAddress2.default();
	    view.initialize();
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	    function Model() {
	        _classCallCheck(this, Model);

	        this.stName;
	        this.cityName;
	    }

	    _createClass(Model, [{
	        key: "add",
	        value: function add(stName, cityName) {
	            this.stName = stName;
	            this.cityName = cityName;
	        }
	    }]);

	    return Model;
	}();

	exports.default = new Model();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _modelAddress = __webpack_require__(1);

	var _modelAddress2 = _interopRequireDefault(_modelAddress);

	var _controllerAddress = __webpack_require__(3);

	var _controllerAddress2 = _interopRequireDefault(_controllerAddress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View(elements) {
	        _classCallCheck(this, View);

	        this.elements = elements;
	        this.model = _modelAddress2.default;
	        this.controller = new _controllerAddress2.default();
	    }

	    _createClass(View, [{
	        key: "initialize",
	        value: function initialize() {
	            var _this = this;

	            this.elements.checkbox.addEventListener('change', function () {
	                _this.elements.shipStName.value = _this.elements.payStName.value;
	                _this.elements.shipCtName.value = _this.elements.payCtName.value;
	                _this.controller.add(_this.elements.shipStName.value, _this.elements.shipCtName.value);
	            });
	        }
	    }]);

	    return View;
	}();

	exports.default = View;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _modelAddress = __webpack_require__(1);

	var _modelAddress2 = _interopRequireDefault(_modelAddress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller() {
	        _classCallCheck(this, Controller);

	        this.model = _modelAddress2.default;
	    }

	    _createClass(Controller, [{
	        key: "add",
	        value: function add(stName, cityName) {
	            this.model.add(stName, cityName);
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ })
/******/ ]);