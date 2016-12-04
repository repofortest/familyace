(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _topbar = require('./components/topbar.js');

var _mobile_menu = require('./components/mobile_menu.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.init(document.querySelector('[topbar]'), _topbar.Topbar);
    this.init(document.querySelector('[mobile-menu]'), _mobile_menu.MobileMenu);
  }

  _createClass(App, [{
    key: 'init',
    value: function init(element, component) {
      if (element) {
        return new component(element);
      }
    }
  }]);

  return App;
}();

document.addEventListener("DOMContentLoaded", function () {
  new App();
});

},{"./components/mobile_menu.js":2,"./components/topbar.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MobileMenu = exports.MobileMenu = function MobileMenu(element) {
  _classCallCheck(this, MobileMenu);

  this.element = element;

  var body = document.querySelector('body');
  var buttonOpen = document.querySelector('[mobile-menu-button-open]');
  var buttonClose = document.querySelector('[mobile-menu-button-close]');

  buttonOpen.addEventListener('click', function () {
    body.classList.add('mobile-menu--opened');
  });

  buttonClose.addEventListener('click', function () {
    body.classList.remove('mobile-menu--opened');
  });
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Topbar = exports.Topbar = function Topbar(element) {
  var _this = this;

  _classCallCheck(this, Topbar);

  this.element = element;
  this.activeClass = 'is-shrinked';

  // TODO add debounce function
  document.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
      element.classList.add(_this.activeClass);
    } else {
      element.classList.remove(_this.activeClass);
    }
  });
};

},{}]},{},[1]);
