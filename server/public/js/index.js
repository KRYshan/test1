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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Test = function Test() {
	    _classCallCheck(this, Test);

	    this.a = 'hello world';
	};

	;
	var test = new Test();
	document.body.innerHTML = test.a;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	//let and var
	/*function test(){
	 /!*    for(let i=1;i<3;i++){
	         console.log(i);
	     }
	     console.log(i);*!/
	/!*let a=1;
	let a=2;*!/
	}
	test();*/
	//常量
	/*
	function last(){
	    const PI=3.1415926;
	  //  console.log(PI);
	    const k={
	        a:1
	    };
	    k.b=3;
	    console.log(PI,k);
	}
	last();*/
	//lesson2
	//解构赋值，左边结构和右边结构一一对应
	/*
	数组解构赋值、对象解构赋值、字符串结构赋值[左边数组，右边字符串]、函数参数结构赋值、数值结构赋值
	 */
	{
	    var a = void 0,
	        b = void 0,
	        rest = void 0;
	    a = 1;
	    b = 2;

	    console.log(a, b);
	}
	{
	    var _a = void 0,
	        _b = void 0,
	        _rest = void 0;
	    _a = 1;
	    _b = 2;
	    _rest = [3, 4, 5, 6];

	    console.log(_a, _b, _rest);
	}
	{
	    var _a$b;

	    var _a2 = void 0,
	        _b2 = void 0;
	    [(_a$b = { a: 1, b: 2 }, _a2 = _a$b.a, _b2 = _a$b.b, _a$b)];
	    console.log(_a2, _b2);
	}
	//配对不成功的时候，默认值为undefined
	{
	    var _a3 = void 0,
	        _b3 = void 0,
	        c = void 0;
	    var _ref = [1, 2];
	    _a3 = _ref[0];
	    _b3 = _ref[1];
	    c = _ref[2];

	    console.log(_a3, _b3, c);
	}
	//解构赋值在数值交换的时候，比较有用
	{
	    var _a4 = 1,
	        _b4 = 2;
	    var _ref2 = [_b4, _a4];
	    _a4 = _ref2[0];
	    _b4 = _ref2[1];

	    console.log(_a4, _b4);
	}
	//解构赋值在函数返回值的时候比较有用
	{
	    var f = function f() {
	        return [1, 2];
	    };

	    var _a5 = void 0,
	        _b5 = void 0;

	    var _f = f();

	    var _f2 = _slicedToArray(_f, 2);

	    _a5 = _f2[0];
	    _b5 = _f2[1];

	    console.log(_a5, _b5);
	}
	//返回多个值的时候，可以选择性的接收有用的【,,,,】
	{
	    var _f3 = function _f3() {
	        return [1, 2, 3, 4, 5];
	    };

	    var _a6 = void 0,
	        _b6 = void 0,
	        _c = void 0;

	    var _f4 = _f3();

	    var _f5 = _slicedToArray(_f4, 4);

	    _a6 = _f5[0];
	    _b6 = _f5[3];

	    console.log(_a6, _b6);
	}
	//不确定返回多少个元素，只关心第一个，其他的赋值给一个数组
	{
	    var _f6 = function _f6() {
	        return [1, 2, 3, 4, 5];
	    };

	    var _a7 = void 0,
	        _b7 = void 0,
	        _c2 = void 0;

	    var _f7 = _f6();

	    var _f8 = _toArray(_f7);

	    _a7 = _f8[0];
	    _b7 = _f8.slice(1);

	    console.log(_a7, _b7);
	}
	//对象解构赋值
	{
	    var o = { p: 42, q: true };
	    var _p = o.p,
	        q = o.q;

	    console.log(_p, q);
	}
	//对象解构赋值，默认值
	//json对象的解构赋值
	{
	    var metaData = {
	        title: 'abc',
	        test: [{ title: 'test', desc: 'description' }]
	    };

	    var estitle = metaData.title,
	        _metaData$test = _slicedToArray(metaData.test, 1),
	        cnTitle = _metaData$test[0].title;

	    console.log(estitle, cnTitle);
	}
	//正则扩展
	/*
	{
	    let regex=new RegExp('xyz','i');
	    let regex2=new RegExp(/xyz/i);
	    console.log(regex.test('xyz123'),regex2.test('xyz123'));
	}*/
	/*
	Symbol的概念：提供独一无二的值，用symbol声明的变量a和b永远不可能相等
	 */
	{
	    var a1 = Symbol();
	    var a2 = Symbol();
	    console.log(a1 === a2);
	    var a3 = Symbol.for('a3'); //a3是一个key值，如果a3存在，则可以返回它的值
	    var a4 = Symbol.for('a3'); //a3和a4是相等的
	    console.log(a3);
	    console.log(a3 === a4);
	}
	/*
	Symbol使用的场景
	 */
	{
	    var _obj;

	    var _a8 = Symbol.for('abc');
	    var obj = (_obj = {}, _defineProperty(_obj, _a8, '123'), _defineProperty(_obj, 'abc', 345), _defineProperty(_obj, 'c', 456), _obj);
	    console.log(_a8, obj);
	    //let of和let in没有办法获取Symbol()的值
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _step$value = _slicedToArray(_step.value, 2),
	                _key = _step$value[0],
	                value = _step$value[1];

	            console.log('let of', _key, value);
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

	    for (var key in obj) {
	        console.log('let in', key, obj[key]);
	    }
	    //
	    Object.getOwnPropertySymbols(obj).forEach(function (item) {
	        return console.log(obj[item]);
	    });
	    //reflect对象,Symbol和非Symbol
	    Reflect.ownKeys(obj).forEach(function (item) {
	        return console.log(obj[item]);
	    });
	}
	//Set和Map
	{
	    var set = new Set([1, 2, 3, 4, 5]);
	    var _a9 = [].concat(_toConsumableArray(set));
	    console.log(_a9[0]);
	}
	{
	    var divs = function divs() {
	        return [].concat(_toConsumableArray(document.querySelectorAll('body')));
	    };

	    var _set = new Set(divs());
	    console.log(_set.size);
	}
	{
	    var _set2 = new Set(['gre', 'red']);
	}
	//js的对象，本质上是键值对的集合,但其键只能用字符串
	{
	    var data = {};
	    var element = document.getElementsByTagName('body')[0];
	    data[element] = 'metdata';
	    console.log(data[element]);
	    //document.body.innerHTML=data[element];
	    /* const o={a:1,p:2};
	     const map=new Map();
	     map.set(o);
	    console.log( map.get(o.a));*/
	    var map = new Map([['name', '张三'], ['title', 'Author']]);
	    //items.forEach((key,value)=>map.set(key,value));
	    //键值，要一样，其实两个['a']是两个数组对象
	    var map1 = new Map();
	    map1.set(['a'], 555);
	    console.log(map1.get(['a']));
	}
	//es生成对象的实例方法，还有继承
	{
	    //通过构造函数和原型结合的方式，定义类
	    var Point = function Point(x, y) {
	        this.x = x;
	        this.y = y;
	    };

	    //继承
	    var PointB = function PointB(x, y, z) {
	        Point.call(this, x, y);
	        this.z = z;
	    };

	    Point.prototype.toString = function () {
	        return '(' + this.x + ',' + this.y + ')';
	    };
	    PointB.prototype = new Point();
	    PointB.prototype.toString = function () {
	        return '(' + this.x + ',' + this.y + this.z + ')';
	    };
	    var p = new Point(1, 2);
	    var p1 = new PointB(1, 2, 3);
	    console.log(p.toString());
	    console.log(p1.toString());
	}
	//ES6引入了类，作为对象的模板
	{
	    var _Point = function () {
	        function _Point(x, y) {
	            _classCallCheck(this, _Point);

	            this.x = x;
	            this.y = y;
	        }

	        _createClass(_Point, [{
	            key: 'toString',
	            value: function toString() {
	                return '(' + this.x + ',' + this.y + ')';
	            }
	        }]);

	        return _Point;
	    }();
	    //可以立即执行的类


	    var person = new (function () {
	        function _class(x, y) {
	            _classCallCheck(this, _class);

	            this.x = x;
	            this.y = y;
	        }

	        _createClass(_class, [{
	            key: 'toString',
	            value: function toString() {
	                return this.x + ',' + this.y;
	            }
	        }]);

	        return _class;
	    }())(1, 2);
	    console.log(person.toString());
	    //设置get和set关键字
	}
	{
	    var _Point2 = function () {
	        function _Point2(x) {
	            _classCallCheck(this, _Point2);

	            this.x = x;
	        }

	        _createClass(_Point2, [{
	            key: 'pro_x',
	            get: function get() {
	                return this.x;
	            },
	            set: function set(value) {
	                this.x = value;
	            }
	        }]);

	        return _Point2;
	    }();

	    var _p2 = new _Point2(1, 2);
	    _p2.pro_x = 3;
	    console.log(_p2.pro_x);
	}
	//类的继承
	{
	    var _Point3 = function () {
	        function _Point3(x, y) {
	            _classCallCheck(this, _Point3);

	            this.x = x;
	            this.y = y;
	        }

	        _createClass(_Point3, [{
	            key: 'toString',
	            value: function toString() {
	                return '(' + this.x + ',' + this.y + ')';
	            }
	        }]);

	        return _Point3;
	    }();

	    var _PointB = function (_Point4) {
	        _inherits(_PointB, _Point4);

	        function _PointB(x, y, z) {
	            _classCallCheck(this, _PointB);

	            var _this = _possibleConstructorReturn(this, (_PointB.__proto__ || Object.getPrototypeOf(_PointB)).call(this, x, y));

	            _this.z = z;
	            return _this;
	        }

	        _createClass(_PointB, [{
	            key: 'toString',
	            value: function toString() {
	                return _get(_PointB.prototype.__proto__ || Object.getPrototypeOf(_PointB.prototype), 'toString', this).call(this) + ',' + this.z;
	            }
	        }]);

	        return _PointB;
	    }(_Point3);
	    //可以判断一个类是否继承了另外一个类


	    Object.getPrototypeOf(_PointB) === _Point3;
	    //super可以当作函数 和 对象 使用
	    /*
	    super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B
	     */
	}
	/*
	proxy 代理
	Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，
	都必须先通过这层拦截，
	因此提供了一种机制，可以对外界的访问进行过滤和改写。
	 */

/***/ })
/******/ ]);