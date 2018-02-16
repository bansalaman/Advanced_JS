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

	"use strict";

	var _cityMVP = __webpack_require__(1);

	var _cityMVP2 = _interopRequireDefault(_cityMVP);

	var _cityViewMVP = __webpack_require__(3);

	var _cityViewMVP2 = _interopRequireDefault(_cityViewMVP);

	var _cityCtrlMVP = __webpack_require__(4);

	var _cityCtrlMVP2 = _interopRequireDefault(_cityCtrlMVP);

	var _multimodule = __webpack_require__(5);

	var _multimodule2 = _interopRequireDefault(_multimodule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    //let model = new Model();
	    //key value pair
	    //console.log(mod1()+" "+mod2()+" "+mod3())
	    console.log(_multimodule2.default.mod1() + " " + _multimodule2.default.mod2() + " " + _multimodule2.default.mod3());
	    //console.log(obj.mod1()+" "+obj.mod2()+" "+obj.mod3())
	    var presenter = new _cityCtrlMVP2.default();
	    presenter.initialize();
	})();
	//import {mod1,mod2,mod3} from './util/multimodule'

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listenernotifierMVP = __webpack_require__(2);

	var _listenernotifierMVP2 = _interopRequireDefault(_listenernotifierMVP);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	    function Model() {
	        _classCallCheck(this, Model);

	        this.cities = [];
	        this.cityAdded = new _listenernotifierMVP2.default();
	        this.cityRemoved = new _listenernotifierMVP2.default();
	    }

	    _createClass(Model, [{
	        key: "add",
	        value: function add(name) {
	            this.cities.push(name);
	            this.cityAdded.notify(this.cities);
	        }
	    }, {
	        key: "remove",
	        value: function remove(index) {
	            this.cities.splice(index, 1);
	            this.cityRemoved.notify(this.cities);
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
	    function Observer(observers) {
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
	        value: function notify(newCity) {
	            this.observers.forEach(function (cb) {
	                cb(newCity);
	            });
	        }
	    }]);

	    return Observer;
	}();

	exports.default = Observer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _cityMVP = __webpack_require__(1);

	var _cityMVP2 = _interopRequireDefault(_cityMVP);

	var _cityCtrlMVP = __webpack_require__(4);

	var _cityCtrlMVP2 = _interopRequireDefault(_cityCtrlMVP);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View =
	//dom elements and will represent everything - button, dopdown
	function View(elements) {
	    _classCallCheck(this, View);

	    this.elements = elements;
	};

	exports.default = new View({ addBtn: document.querySelector('#addBtn'),
	    removeBtn: document.querySelector('#removeBtn'),
	    cityList: document.querySelector('#cityList')
	});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _cityMVP = __webpack_require__(1);

	var _cityMVP2 = _interopRequireDefault(_cityMVP);

	var _cityViewMVP = __webpack_require__(3);

	var _cityViewMVP2 = _interopRequireDefault(_cityViewMVP);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller() {
	        _classCallCheck(this, Controller);

	        this.model = _cityMVP2.default;
	        this.view = _cityViewMVP2.default;
	    }

	    _createClass(Controller, [{
	        key: 'initialize',
	        value: function initialize() {
	            var _this = this;

	            this.model.cityAdded.attach(function (cityList) {
	                //rerendering the dom by refreshing\
	                //render is a local function
	                _this.render(cityList);
	            });

	            this.model.cityRemoved.attach(function (cityList) {
	                _this.render(cityList);
	            });

	            this.view.elements.addBtn.addEventListener('click', function () {
	                var newCity = prompt('Enter a New City');
	                if (newCity) {
	                    _this.model.add(newCity);
	                }
	            });

	            this.view.elements.removeBtn.addEventListener('click', function () {
	                var index = _this.view.elements.cityList.options.selectedIndex;
	                if (index != -1) {
	                    _this.model.remove(index);
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render(newCityList) {
	            this.view.elements.cityList.innerHTML = '';
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = newCityList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var city = _step.value;

	                    this.view.elements.cityList.appendChild
	                    //name,value
	                    (new Option(city, city));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// export default class Mod1{
	//     constructor(){
	//         console.log('mod1');
	//     }
	// }
	//arrow functions for exporting
	var mod1 = function mod1() {
	    console.log('Mod1');
	};
	var mod2 = function mod2() {
	    console.log('Mod2');
	};
	var mod3 = function mod3() {
	    console.log('Mod3');
	};
	exports.default = { mod1: mod1, mod2: mod2, mod3: mod3 };

	// let Mod1=()=>{
	//     console.log('Mod1');
	// }

	// // export default class Mod1{
	// //     constructor(){
	// //         console.log('Mod1')
	// //     }
	// // }
	// export class Mod2{
	//     constructor(){
	//         console.log('Mod2')
	//     }
	// }
	// // let  mod3=()=>{
	// //     console.log('Mod3');
	// // }
	// export class Mod3{
	//     constructor(){
	//         console.log('Mod3')
	//     }
	// }
	// export default Mod1;

	//export default { mod1,mod2,mod3}

/***/ })
/******/ ]);