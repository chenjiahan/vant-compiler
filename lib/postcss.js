'use strict';

exports.__esModule = true;

require('babel-polyfill');

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(source, plugins) {
    var content, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!source || !source[0])) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', '');

          case 2:
            content = source[0].content;

            if (plugins) {
              _context.next = 7;
              break;
            }

            return _context.abrupt('return', content);

          case 7:
            _context.next = 9;
            return (0, _postcss2.default)(plugins).process(content);

          case 9:
            result = _context.sent;
            return _context.abrupt('return', result.css);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();