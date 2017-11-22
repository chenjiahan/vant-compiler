'use strict';

var _vueTemplateCompiler = require('vue-template-compiler');

var compiler = _interopRequireWildcard(_vueTemplateCompiler);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _inject = require('./inject');

var _inject2 = _interopRequireDefault(_inject);

var _babel = require('./babel');

var _babel2 = _interopRequireDefault(_babel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = function (code) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _compiler$parseCompon = compiler.parseComponent(code),
      script = _compiler$parseCompon.script,
      template = _compiler$parseCompon.template,
      styles = _compiler$parseCompon.styles;

  var render = (0, _template2.default)(template, config.template);
  var js = (0, _babel2.default)((0, _inject2.default)(script.content, render), config.babel);
  return { js: js, css: styles };
};