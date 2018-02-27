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

	var _cityView = __webpack_require__(1);

	var _cityView2 = _interopRequireDefault(_cityView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {

	    //let model = Model;
	    var view = new _cityView2.default({ addButton: document.querySelector('#addMeal'),
	        updateButton: document.querySelector('#updateMeal'),
	        deleteButton: document.querySelector('#deleteMeal'),
	        totalCalories: document.querySelector('#totalCalories'),
	        meal: document.querySelector('#meal'),
	        amount: document.querySelector('#amount'),
	        mainTable: document.querySelector('#mainTable'),
	        table: document.querySelector('#table'),
	        clearButton: document.querySelector('#clearButton') });

	    //let controller = new Controller();
	    view.initialize();
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mealctrl = __webpack_require__(2);

	var _mealctrl2 = _interopRequireDefault(_mealctrl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View(elements) {
	        _classCallCheck(this, View);

	        this.elements = elements;
	        this.total = 0;
	        this.targetId;
	    }

	    _createClass(View, [{
	        key: "initialize",
	        value: function initialize() {
	            var _this = this;

	            _mealctrl2.default.DataStorage.itemChanged.attach(function (meals) {
	                _this.render(meals);
	            });

	            window.onload = function () {
	                _this.render(_mealctrl2.default.items);
	            };

	            this.elements.addButton.addEventListener('click', function () {
	                if (_this.elements.meal.value != "" && _this.elements.amount.value != "") {
	                    _mealctrl2.default.addMeal(_this.elements.meal.value, _this.elements.amount.value);
	                }
	            });
	            this.elements.updateButton.addEventListener('click', function () {
	                if (_this.elements.meal.value != "" && _this.elements.amount.value != "") {
	                    _mealctrl2.default.updateMeal(_this.targetId, _this.elements.meal.value, _this.elements.amount.value);
	                }
	            });
	            this.elements.deleteButton.addEventListener('click', function () {
	                if (_this.elements.meal.value != "" && _this.elements.amount.value != "") {
	                    _mealctrl2.default.removeMeal(_this.targetId);
	                }
	            });
	            this.elements.clearButton.addEventListener('click', function () {
	                _this.elements.addButton.style = "display:inline";
	                _this.elements.updateButton.style = "display:none";
	                _this.elements.deleteButton.style = "display:none";
	                _mealctrl2.default.clearMeals();
	            });
	        }
	    }, {
	        key: "render",
	        value: function render(newMeals) {
	            var _this2 = this;

	            this.total = 0;
	            this.elements.mainTable.innerHTML = "";
	            if (newMeals.length == 0) {
	                this.elements.meal.value = "";
	                this.elements.amount.value = "";
	                this.elements.mainTable.innerHTML = "";
	                this.total = 0;
	                this.elements.totalCalories.innerHTML = this.total;
	            }
	            newMeals.forEach(function (item) {
	                var tdata1 = document.createElement('td');
	                var tdata2 = document.createElement('td');
	                var tdata3 = document.createElement('td');
	                tdata3.setAttribute('style', 'float:right');
	                var trow = document.createElement('tr');
	                tdata1.innerHTML = item.meal;
	                tdata2.innerHTML = item.calorie + " Calories";
	                var editButton = document.createElement('button');
	                editButton.classList += "editButton";
	                editButton.setAttribute('id', item.id);
	                editButton.innerHTML = "Edit";
	                tdata3.appendChild(editButton);
	                trow.appendChild(tdata1);
	                trow.appendChild(tdata2);
	                trow.appendChild(tdata3);
	                _this2.elements.mainTable.appendChild(trow);
	                _this2.total = _this2.total + parseInt(item.calorie);
	                _this2.elements.totalCalories.innerHTML = _this2.total;
	                _this2.elements.meal.value = "";
	                _this2.elements.amount.value = "";
	                _this2.elements.addButton.style = "display:inline";
	                _this2.elements.updateButton.style = "display:none";
	                _this2.elements.deleteButton.style = "display:none";
	                editButton.addEventListener('click', function (event) {
	                    document.querySelectorAll('.editButton').forEach(function (entry) {
	                        entry.disabled = true;
	                    });
	                    _this2.targetId = event.currentTarget.id;
	                    _this2.elements.addButton.style = "display:none";
	                    _this2.elements.updateButton.style = "display:inline";
	                    _this2.elements.deleteButton.style = "display:inline";
	                    _this2.elements.meal.value = item.meal;
	                    _this2.elements.amount.value = item.calorie;
	                });
	                document.querySelectorAll('.editButton').forEach(function (entry) {
	                    entry.disabled = false;
	                });
	            });
	        }
	    }]);

	    return View;
	}();

	exports.default = View;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mealstorage = __webpack_require__(3);

	var _mealstorage2 = _interopRequireDefault(_mealstorage);

	var _meal = __webpack_require__(5);

	var _meal2 = _interopRequireDefault(_meal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MealController = function () {
	    function MealController() {
	        _classCallCheck(this, MealController);

	        this.DataStorage = _mealstorage2.default;
	        this.items = this.DataStorage.getMeals();
	        this.currentMeal = null;
	        this.totalCalories = 0;
	    }

	    _createClass(MealController, [{
	        key: 'addMeal',
	        value: function addMeal(name, calories) {
	            var ID = void 0;
	            if (this.items.length > 0) {
	                ID = this.items[this.items.length - 1].id + 1;
	            } else ID = 0;

	            var newMeal = new _meal2.default(ID, name, calories);
	            this.items.push(newMeal);
	            _mealstorage2.default.storeMeal(newMeal);
	            return newMeal;
	        }
	    }, {
	        key: 'updateMeal',
	        value: function updateMeal(id, name, calorie) {
	            this.items.forEach(function (item) {
	                if (item.id == id) {
	                    item.meal = name;
	                    item.calorie = calorie;
	                    _mealstorage2.default.updateMeal(item);
	                }
	            });
	        }

	        // updateMeal(id,name,calorie){
	        //     let newMeal = new Model(id,name,calorie);
	        //     DataStorage.updateMeal(newMeal);
	        // }

	    }, {
	        key: 'removeMeal',
	        value: function removeMeal(id) {
	            this.items.forEach(function (item) {
	                if (item.id == id) {
	                    _mealstorage2.default.removeMeal(item);
	                }
	            });
	        }
	    }, {
	        key: 'clearMeals',
	        value: function clearMeals() {
	            this.items.forEach(function (item) {
	                _mealstorage2.default.removeMeal(item);
	            });
	        }
	    }]);

	    return MealController;
	}();

	exports.default = new MealController();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listenernotify = __webpack_require__(4);

	var _listenernotify2 = _interopRequireDefault(_listenernotify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataStorage = function () {
	    function DataStorage() {
	        _classCallCheck(this, DataStorage);

	        this.itemChanged = new _listenernotify2.default();
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
	            this.itemChanged.notify(items);
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
	            this.itemChanged.notify(meals);
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
	            this.itemChanged.notify(meals);
	        }
	    }]);

	    return DataStorage;
	}();

	exports.default = new DataStorage();

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
	            debugger;
	            this.observers.push(cb);
	        }
	    }, {
	        key: "notify",
	        value: function notify(meals) {
	            debugger;
	            this.observers.forEach(function (cb) {
	                cb(meals);
	            });
	        }
	    }]);

	    return Observer;
	}();

	exports.default = Observer;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function Model(id, meal, calorie) {
	    _classCallCheck(this, Model);

	    // Ideally we should make the properties private so that it can't be accessed by everyone
	    // To do so we can use Setters and getters
	    this.id = id;
	    this.meal = meal;
	    this.calorie = calorie;
	};

	exports.default = Model;

/***/ })
/******/ ]);