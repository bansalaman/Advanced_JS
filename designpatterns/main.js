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

	var _modelTracalorie = __webpack_require__(1);

	var _modelTracalorie2 = _interopRequireDefault(_modelTracalorie);

	var _viewTracalorie = __webpack_require__(3);

	var _viewTracalorie2 = _interopRequireDefault(_viewTracalorie);

	var _controllerTracalorie = __webpack_require__(4);

	var _controllerTracalorie2 = _interopRequireDefault(_controllerTracalorie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    console.log("tracalorie.js");
	    var view = new _viewTracalorie2.default({
	        //debugger;
	        clearAll: document.getElementById('clear-all'),
	        addMeal: document.querySelector('#add-meal'),
	        mealInput: document.getElementById('meal-input'),
	        calorieInput: document.getElementById('calorie-input'),
	        tableData: document.getElementById('addTable'),
	        totalCalories: document.getElementById('total-calories'),
	        updateMeal: document.getElementById('update-meal'),
	        deleteMeal: document.getElementById('delete-meal')
	    });
	    var controller = new _controllerTracalorie2.default();
	    view.initialize();
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _observerTracalorie = __webpack_require__(2);

	var _observerTracalorie2 = _interopRequireDefault(_observerTracalorie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	    function Model() {
	        _classCallCheck(this, Model);

	        var count = 0;
	        ++count;
	        console.log(count);
	        this.meals;
	        this.calories;
	        this.totalCalor = 0;
	        this.itemAdded = new _observerTracalorie2.default();
	        this.itemRemoved = new _observerTracalorie2.default();
	        this.itemCleared = new _observerTracalorie2.default();
	        this.itemUpdated = new _observerTracalorie2.default();
	    }

	    _createClass(Model, [{
	        key: 'add',
	        value: function add(mealName, NoOfCalories) {
	            this.meals = mealName;
	            this.calories = NoOfCalories;
	            this.totalCalor += parseInt(this.calories);
	            this.itemAdded.notify(this.meals, this.calories, this.totalCalor);
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(mealName, NoOfCalories) {
	            this.meals = mealName;
	            this.calories = NoOfCalories;
	            this.itemRemoved.notify(this.meals, this.calories, this.totalCalor);
	        }
	    }, {
	        key: 'clear',
	        value: function clear(mealName, NoOfCalories, totalCalor) {
	            this.totalCalor = 0;
	            this.itemCleared.notify(mealName, NoOfCalories, this.totalCalor);
	        }
	    }, {
	        key: 'update',
	        value: function update(mealName, NoOfCalories) {
	            this.meals = mealName;
	            this.calories = NoOfCalories;
	            this.totalCalor -= parseInt(this.calories);
	            this.itemUpdated.notify(this.meals, this.calories, this.totalCalor);
	        }
	    }]);

	    return Model;
	}();

	exports.default = new Model();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Observer = function () {
	    function Observer() {
	        _classCallCheck(this, Observer);

	        this.observers = [];
	    }

	    _createClass(Observer, [{
	        key: "attach",
	        value: function attach(cb) {
	            this.observers.push(cb);
	        }
	    }, {
	        key: "notify",
	        value: function notify(meal, calorie, totalCalor) {
	            this.observers.forEach(function (cb) {
	                cb(meal, calorie, totalCalor);
	            });
	        }
	    }]);

	    return Observer;
	}();

	exports.default = Observer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _modelTracalorie = __webpack_require__(1);

	var _modelTracalorie2 = _interopRequireDefault(_modelTracalorie);

	var _controllerTracalorie = __webpack_require__(4);

	var _controllerTracalorie2 = _interopRequireDefault(_controllerTracalorie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View(elements) {
	        _classCallCheck(this, View);

	        this.elements = elements;
	        this.model = _modelTracalorie2.default;
	        this.controller = new _controllerTracalorie2.default();
	    }

	    _createClass(View, [{
	        key: 'initialize',
	        value: function initialize() {
	            var _this = this;

	            this.model.itemAdded.attach(function (meal, calorie, totalCalor) {
	                _this.render(meal, calorie, totalCalor);
	            });
	            this.model.itemRemoved.attach(function (meal, calorie, totalCalor) {
	                _this.renderRemove(meal, calorie, totalCalor);
	            });
	            this.model.itemCleared.attach(function (meal, calorie, totalCalor) {
	                _this.render(meal, calorie, totalCalor);
	                _this.elements.tableData.innerHTML = ' ';
	            });
	            this.model.itemUpdated.attach(function (meal, calorie, totalCalor) {
	                _this.renderUpdate(meal, calorie, totalCalor);
	            });
	            this.elements.addMeal.addEventListener('click', function () {
	                if (_this.elements.mealInput.value !== "" && _this.elements.calorieInput.value !== "") {
	                    _this.controller.add(_this.elements.mealInput.value, _this.elements.calorieInput.value);
	                }
	            });
	            this.elements.clearAll.addEventListener('click', function () {
	                _this.elements.mealInput.value = ' ';
	                _this.elements.calorieInput.value = 0;
	                _this.controller.clear(_this.elements.mealInput.value, _this.elements.calorieInput.value);
	            });
	            this.elements.updateMeal.addEventListener('click', function () {
	                _this.controller.add(_this.elements.mealInput.value, _this.elements.calorieInput.value);
	            });
	            this.elements.deleteMeal.addEventListener('click', function () {
	                _this.controller.delete(_this.elements.mealInput.value, _this.elements.calorieInput.value);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render(meals, calories, totalCalorie) {
	            var _this2 = this;

	            var trow = document.createElement('tr'),
	                tdata1 = document.createElement('td'),
	                tdata2 = document.createElement('td'),
	                tdata3 = document.createElement('td'),
	                edit = document.createElement('button');
	            this.elements.totalCalories.placeholder = totalCalorie;
	            edit.innerHTML = "Edit";
	            edit.id = 'edit1';
	            //edit.setAttribute('id',item.id);
	            tdata1.innerHTML = meals + ":";
	            tdata1.setAttribute("style", "float:left");
	            tdata2.innerHTML = calories;
	            tdata2.setAttribute("style", "float:left");
	            edit.setAttribute("style", "float:right");
	            tdata3.appendChild(edit);
	            trow.appendChild(tdata1);
	            trow.appendChild(tdata2);
	            trow.appendChild(tdata3);
	            this.elements.tableData.appendChild(trow);
	            this.elements.mealInput.value = '';
	            this.elements.calorieInput.value = '';
	            edit.addEventListener('click', function (e) {
	                edit.parentElement.parentElement.remove();
	                _this2.controller.update(meals, calories, totalCalorie);
	                _this2.elements.updateMeal.style.display = "inline";
	                _this2.elements.deleteMeal.style.display = "inline";
	                _this2.elements.addMeal.style.display = "none";
	            });
	        }
	    }, {
	        key: 'renderUpdate',
	        value: function renderUpdate(newMeal, newCalorie, newTotal) {
	            this.elements.mealInput.value = newMeal;
	            this.elements.calorieInput.value = newCalorie;
	        }
	    }, {
	        key: 'renderRemove',
	        value: function renderRemove(newMeal, newCalorie, newTotal) {
	            this.elements.totalCalories.value = newTotal;
	            this.elements.mealInput.value = "";
	            this.elements.calorieInput.value = "";
	        }
	    }]);

	    return View;
	}();

	exports.default = View;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _modelTracalorie = __webpack_require__(1);

	var _modelTracalorie2 = _interopRequireDefault(_modelTracalorie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller() {
	        _classCallCheck(this, Controller);

	        this.model = _modelTracalorie2.default;
	    }

	    _createClass(Controller, [{
	        key: 'add',
	        value: function add(mealName, NoOfCalories) {
	            this.model.add(mealName, NoOfCalories);
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(mealName, NoOfCalories) {
	            this.model.delete(mealName, NoOfCalories);
	        }
	    }, {
	        key: 'clear',
	        value: function clear(mealName, NoOfCalories) {
	            this.model.clear(mealName, NoOfCalories);
	        }
	    }, {
	        key: 'update',
	        value: function update(mealName, NoOfCalories) {
	            this.model.update(mealName, NoOfCalories);
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ })
/******/ ]);