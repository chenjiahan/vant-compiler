"use strict";

exports.__esModule = true;
exports.default = _default;

require("babel-polyfill");

var _postcss = _interopRequireDefault(require("postcss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default(_x, _x2) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(source, plugins) {
    var content, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!source || !source[0])) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", '');

          case 2:
            content = source[0].content;

            if (plugins) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", content);

          case 7:
            _context.next = 9;
            return (0, _postcss.default)(plugins).process(content);

          case 9:
            result = _context.sent;
            return _context.abrupt("return", result.css);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _ref.apply(this, arguments);
}