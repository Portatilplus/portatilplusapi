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
 * este es el controlador de pazysalvo
 * @module pazysalvo
 */

/**
 * esta funcion me sirve para agregar un paz y salvo a los usuarios
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
var agregarpazysalvo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, nombre, apellido, telefono, sanciones, descripcion, respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, apellido = _req$body.apellido, telefono = _req$body.telefono, sanciones = _req$body.sanciones, descripcion = _req$body.descripcion;
          if (!(!nombre || !nombre || !telefono || !sanciones || !descripcion)) {
            _context.next = 4;
            break;
          }
          _mensaje["default"].error(req, res, 400, "faltan datos");
          return _context.abrupt("return");
        case 4:
          _context.prev = 4;
          _context.next = 7;
          return _db["default"].query("CALL sp_agregar_paysalvo('".concat(nombre, "','").concat(apellido, "','").concat(telefono, "','").concat(sanciones, "','").concat(descripcion, "');"));
        case 7:
          respuesta = _context.sent;
          if (respuesta[0].affectedRows == 1) {
            _mensaje["default"].success(req, res, 200, "paz y salvo creado");
          } else {
            _mensaje["default"].error(req, res, 400, "paz y alvo no creado");
          }
          _context.next = 14;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          _mensaje["default"].error(req, res, 500, "error al agregar paz y alvo");
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 11]]);
  }));
  return function agregarpazysalvo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * esta funcion me sirve para  listar un paz y salvo a los usuarios
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
var listarpazysalvo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _db["default"].query("CALL sp_listar_pazsalvo();");
        case 3:
          respuesta = _context2.sent;
          _mensaje["default"].success(req, res, 200, respuesta[0]);
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _mensaje["default"].error(req, res, 500, "error al mostrar");
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function listarpazysalvo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * esta funcion me sirve para  modificar un paz y salvo a los usuarios
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
var modificarpazysalvo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, idpazysalvo, nombre, apellido, telefono, sanciones, descripcion, respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body2 = req.body, idpazysalvo = _req$body2.idpazysalvo, nombre = _req$body2.nombre, apellido = _req$body2.apellido, telefono = _req$body2.telefono, sanciones = _req$body2.sanciones, descripcion = _req$body2.descripcion;
          _context3.prev = 1;
          _context3.next = 4;
          return _db["default"].query("CALL sp_modificar_pazsalvo(".concat(idpazysalvo, ",'").concat(nombre, "','").concat(apellido, "','").concat(telefono, "','").concat(sanciones, "','").concat(descripcion, "');"));
        case 4:
          respuesta = _context3.sent;
          if (respuesta[0].affectedRows == 1) {
            _mensaje["default"].success(req, res, 200, "paz y salvo modificado");
          } else {
            _mensaje["default"].error(req, res, 400, "paz y salvo no modificado");
          }
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          _mensaje["default"].error(req, res, 500, "error al modificar paz y salvo");
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return function modificarpazysalvo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * esta funcion me sirve para  eliminar un paz y salvo a los usuarios
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
var eliminarpazysalvo = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var idpazysalvo, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          idpazysalvo = req.params.idpazysalvo;
          _context4.prev = 1;
          _context4.next = 4;
          return _db["default"].query("CALL \tsp_borrar_pazsalvo(?);", [idpazysalvo]);
        case 4:
          respuesta = _context4.sent;
          if (respuesta[0].affectedRows == 1) {
            _mensaje["default"].success(req, res, 200, "accesorio eliminado");
          } else {
            _mensaje["default"].error(req, res, 400, "accesorio no eliminado");
          }
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          _mensaje["default"].error(req, res, 500, "error al elminar");
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return function eliminarpazysalvo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var metodos = exports.metodos = {
  agregarpazysalvo: agregarpazysalvo,
  listarpazysalvo: listarpazysalvo,
  modificarpazysalvo: modificarpazysalvo,
  eliminarpazysalvo: eliminarpazysalvo
};