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

	var _MealCtrl = __webpack_require__(1);

	var _MealCtrl2 = _interopRequireDefault(_MealCtrl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_MealCtrl2.default.addMeal('Shahi Paneer', 1000));

	//Mealcontroller.updateMeal(6,'shahi paneer',2000);
	//Mealcontroller.removeMeal(2);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mealstorage = __webpack_require__(2);

	var _mealstorage2 = _interopRequireDefault(_mealstorage);

	var _meal = __webpack_require__(3);

	var _meal2 = _interopRequireDefault(_meal);

	var _observerTracalorie = __webpack_require__(4);

	var _observerTracalorie2 = _interopRequireDefault(_observerTracalorie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MealController = function () {
	    function MealController() {
	        _classCallCheck(this, MealController);

	        this.items = _mealstorage2.default.getMeals();
	        this.currentMeal = null;
	        this.totalCalories = 0;
	        //itemAdded=new Observer();
	    }

	    _createClass(MealController, [{
	        key: 'addMeal',
	        value: function addMeal(name, calorie) {
	            var ID = void 0;
	            if (this.items.length > 0) {
	                ID = this.items[this.items.length - 1].id + 1;
	            } else {
	                ID = 0;
	            }
	            var newMeal = new _meal2.default(ID, name, calorie);
	            this.items.push(newMeal);
	            _mealstorage2.default.storeMeal(newMeal);
	            return newMeal;
	        }
	    }, {
	        key: 'getMealById',
	        value: function getMealById(id) {
	            var found = null;
	            this.items.forEach(function (item) {
	                if (item.id === id) {
	                    found = item;
	                }
	            });
	            return found;
	        }
	    }, {
	        key: 'updateMeal',
	        value: function updateMeal(id, name, calorie) {
	            this.items.forEach(function (item) {
	                if (item.id === id) {
	                    item.meal = name;
	                    item.calorie = calorie;
	                    _mealstorage2.default.updateMeal(item);
	                }
	            });
	            //return newMeal;
	        }
	    }, {
	        key: 'removeMeal',
	        value: function removeMeal(id) {
	            this.items.forEach(function (item) {
	                if (item.id === id) {
	                    _mealstorage2.default.removeMeal(item);
	                }
	            });
	        }
	    }]);

	    return MealController;
	}();

	exports.default = new MealController();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataStorage = function () {
	    function DataStorage() {
	        _classCallCheck(this, DataStorage);
	    }

	    _createClass(DataStorage, [{
	        key: 'storeMeal',
	        value: function storeMeal(meal) {
	            var items = void 0;
	            if (localStorage.getItem('meals') === null) {
	                items = [];
	                items.push(meal);
	                localStorage.setItem('meals', JSON.stringify(items));
	            } else {
	                items = JSON.parse(localStorage.getItem('meals'));
	                items.push(meal);
	                localStorage.setItem('meals', JSON.stringify(items));
	            }
	        }
	    }, {
	        key: 'updateMeal',
	        value: function updateMeal(meal) {
	            var meals = JSON.parse(localStorage.getItem('meals'));
	            meals.forEach(function (existingmeal) {
	                if (existingmeal.id === meal.id) {
	                    Object.assign(existingmeal, meal);
	                    localStorage.setItem('meals', JSON.stringify(meals));
	                }
	            });
	        }
	    }, {
	        key: 'removeMeal',
	        value: function removeMeal(meal) {
	            var meals = JSON.parse(localStorage.getItem('meals'));
	            var ids = meals.map(function (item) {
	                return item.id;
	            });
	            meals.forEach(function (existingmeal) {
	                if (existingmeal.id === meal.id) {
	                    meals.splice(ids.indexOf(meal.id), 1);
	                }
	                localStorage.setItem('meals', JSON.stringify(meals));
	            });
	        }
	    }, {
	        key: 'getMeals',
	        value: function getMeals() {
	            var items = void 0;
	            if (localStorage.getItem('meals') === null) {
	                items = [];
	            } else {
	                items = JSON.parse(localStorage.getItem('meals'));
	            }
	            return items;
	        }
	    }]);

	    return DataStorage;
	}();

	exports.default = new DataStorage();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function Model(id, meal, calorie) {
	    _classCallCheck(this, Model);

	    this.id = id;
	    this.meal = meal;
	    this.calorie = calorie;
	};

	exports.default = Model;

/***/ }),
/* 4 */
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

/***/ })
/******/ ]);