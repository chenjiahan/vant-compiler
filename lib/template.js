"use strict";

exports.__esModule = true;
exports.default = parse;

var compiler = _interopRequireWildcard(require("vue-template-compiler"));

var _vueTemplateEs2015Compiler = _interopRequireDefault(require("vue-template-es2015-compiler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultConfig = {
  preserveWhitespace: false
};

function parse(template, config) {
  if (config === void 0) {
    config = {};
  }

  var compiled = compiler.compile(template.content, _extends({}, defaultConfig, config));

  if (compiled.errors.length) {
    throw new Error("\n  Error compiling template:\n" + pad(html) + "\n" + compiled.errors.map(function (e) {
      return "  - " + e;
    }).join('\n') + '\n');
  }

  return {
    render: toFunction(compiled.render),
    staticRenderFns: "[" + compiled.staticRenderFns.map(toFunction).join(',') + "]"
  };
}

function toFunction(code) {
  return (0, _vueTemplateEs2015Compiler.default)("var TEMP_VAR = function (){" + code + "}").replace('var TEMP_VAR = ', '');
}