"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metodos = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _db = _interopRequireDefault(require("../../database/db"));
var _mensaje = _interopRequireDefault(require("../../res/mensaje"));
var computadordispo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _db["default"].query("CALL sp_mostrar_computadores()");
        case 3:
          respuesta = _context.sent;
          _mensaje["default"].success(req, res, 200, respuesta[0]);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          _mensaje["default"].error(req, res, 500, "error en la estadistica");
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function computadordispo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var accesoriodispo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _db["default"].query("CALL sp_mostrar_accesorios()");
        case 3:
          respuesta = _context2.sent;
          _mensaje["default"].success(req, res, 200, respuesta[0]);
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _mensaje["default"].error(req, res, 500, "error en la estadistica");
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function accesoriodispo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var reservaactuva = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _db["default"].query("CALL sp_mostrar_reserva()");
        case 3:
          respuesta = _context3.sent;
          _mensaje["default"].success(req, res, 200, respuesta[0]);
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          _mensaje["default"].error(req, res, 500, "error en la estadistica");
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function reservaactuva(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var diseño = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _db["default"].query("CALL sp_mostrar_dise\xF1o()");
        case 3:
          respuesta = _context4.sent;
          _mensaje["default"].success(req, res, 200, respuesta[0]);
          _context4.next = 10;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          _mensaje["default"].error(req, res, 500, "error en la estadistica");
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function diseño(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var administracion = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _db["default"].query("CALL sp_mostrar_administracion()");
        case 3:
          respuesta = _context5.sent;
          _mensaje["default"].success(req, res, 200, respuesta[0]);
          _context5.next = 10;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          _mensaje["default"].error(req, res, 500, "error en la estadistica");
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function administracion(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var software = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _db["default"].query("CALL sp_mostrar_software()");
        case 3:
          respuesta = _context6.sent;
          _mensaje["default"].success(req, res, 200, respuesta[0]);
          _context6.next = 10;
          break;
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          _mensaje["default"].error(req, res, 500, "error en la estadistica");
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function software(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var metodos = exports.metodos = {
  computadordispo: computadordispo,
  accesoriodispo: accesoriodispo,
  reservaactuva: reservaactuva,
  diseño: diseño,
  administracion: administracion,
  software: software
};