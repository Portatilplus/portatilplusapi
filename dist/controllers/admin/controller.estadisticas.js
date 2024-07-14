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
/**
 * este es el controlador de estadisticas
 * @module estadisticas
 */

// historial completo
/**
 * esta funcion me sirve para que mostrar las estadisticas de los computadore
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
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

// historial completo
/**
 * esta funcion me sirve para que mostar las estadisticas de los accesorios
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
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

// historial completo
/**
 * esta funcion me sirve para que mostar las estadisticas de las reservas
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
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

// sp_listar_completadas

var completadas = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _db["default"].query("CALL sp_listar_completadas()");
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
  return function completadas(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var metodos = exports.metodos = {
  computadordispo: computadordispo,
  accesoriodispo: accesoriodispo,
  reservaactuva: reservaactuva,
  completadas: completadas
};