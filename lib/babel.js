'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (source) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _babelCore.transform)(source, _extends({}, defaultConfig, config)).code;
};

var _babelCore = require('babel-core');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultConfig = {
  babelrc: true,
  extends: _path2.default.resolve(__dirname, '../.babelrc')
};