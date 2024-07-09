"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.metodos = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _db = _interopRequireDefault(require("../database/db.js"));
var _mensaje = _interopRequireDefault(require("../res/mensaje"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = require("dotenv");
var _nodemailer = _interopRequireDefault(require("nodemailer"));
(0, _dotenv.config)();
var agregarregistro = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var nombre, apellido, telefono, correo, contrasenasincifrar, rol, estado, contrasena, salt, hash, _contrasena, respuesta, msg;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          nombre = req.body.nombre;
          apellido = req.body.apellido;
          telefono = req.body.telefono;
          correo = req.body.correo;
          contrasenasincifrar = req.body.contrasena;
          rol = req.body.rol;
          estado = req.body.estado;
          contrasena = req.body.contrasena;
          if (!(!nombre || !apellido || !telefono || !telefono || !correo || !contrasena || !rol || !estado)) {
            _context.next = 11;
            break;
          }
          _mensaje["default"].error(req, res, 400, "campos vacios");
          return _context.abrupt("return");
        case 11:
          _context.prev = 11;
          _context.next = 14;
          return _bcrypt["default"].genSalt(5);
        case 14:
          salt = _context.sent;
          _context.next = 17;
          return _bcrypt["default"].hash(contrasenasincifrar, salt);
        case 17:
          hash = _context.sent;
          _contrasena = hash;
          _context.next = 21;
          return _db["default"].query("CALL sp_agregar_registro_usuario(?,?,?,?,?,?,?);", [nombre, apellido, telefono, correo, _contrasena, rol, estado]);
        case 21:
          respuesta = _context.sent;
          // validar el campo de exitososo registro
          if (respuesta[0].affectedRows == 1) {
            msg = "\n                Hola ".concat(nombre, ",\n                Tu usuario es el correo y tu contrase\xF1a\n                para que ingrese a el sistema.\n                \n                Tu usuario sera: ").concat(correo, "\n                Tu clave sera: ").concat(contrasenasincifrar, "\n\n                !Bienvenido a nuestro sistema Portatil Plus\xA1\n            ");
            sendEmail(msg, correo, "Creacion de cuenta Portatil Plus");
            _mensaje["default"].success(req, res, 200, "usuario creado");
          } else {
            _mensaje["default"].error(req, res, 400, "usuario no creado");
          }
          _context.next = 28;
          break;
        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](11);
          _mensaje["default"].error(req, res, 500, "error al agregar registro");
        case 28:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[11, 25]]);
  }));
  return function agregarregistro(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
// este es el de login

var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, correo, contrasena, resultado, contracorrecta, payload, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, correo = _req$body.correo, contrasena = _req$body.contrasena;
          if (!(!correo || !contrasena)) {
            _context2.next = 4;
            break;
          }
          _mensaje["default"].error(req, res, 401, "campos vacios");
          return _context2.abrupt("return");
        case 4:
          _context2.prev = 4;
          _context2.next = 7;
          return _db["default"].query("CALL sp_login(?);", [correo]);
        case 7:
          resultado = _context2.sent;
          if (!(resultado[0][0].length === 0)) {
            _context2.next = 11;
            break;
          }
          _mensaje["default"].error(req, res, 400, "Usuario no encontrado");
          return _context2.abrupt("return");
        case 11:
          _context2.next = 13;
          return _bcrypt["default"].compare(contrasena, resultado[0][0][0].contrasena);
        case 13:
          contracorrecta = _context2.sent;
          if (contracorrecta) {
            _context2.next = 19;
            break;
          }
          _mensaje["default"].error(req, res, 400, "contraseña incorrecta");
          return _context2.abrupt("return");
        case 19:
          payload = {
            correo: resultado[0][0][0].correo,
            rol: resultado[0][0][0].rol
          }; // if(payload.rol === 'Admin'){
          //     return mensajes.success(req, res, 401, {token, "rol":"/dash"});
          //   }else if(payload.rol ==='Usuario'){
          //     return mensajes.success(req, res, 401, "hola usuario");
          //   }
          token = _jsonwebtoken["default"].sign(payload, process.env.PRIVATE_KEY, {
            expiresIn: process.env.EXPIRES_IN
          });
          _mensaje["default"].success(req, res, 200, {
            token: token
          });
        case 22:
          _context2.next = 27;
          break;
        case 24:
          _context2.prev = 24;
          _context2.t0 = _context2["catch"](4);
          _mensaje["default"].error(req, res, 500, "error al loguearse");
        case 27:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[4, 24]]);
  }));
  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var sendEmail = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(message, receiverEmail, subject) {
    var transporter, info;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: "smtp.gmail.com",
            service: "gmail",
            secure: false,
            auth: {
              user: process.env.EMAILER_CORREO,
              pass: process.env.EMAILER_CONTRASENA
            }
          });
          _context3.next = 3;
          return transporter.sendMail({
            from: process.env.EMAILER_CORREO,
            to: receiverEmail,
            subject: subject,
            text: message
          });
        case 3:
          info = _context3.sent;
          console.log("se ha enviado al correo", info.messageId);
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function sendEmail(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
var metodos = exports.metodos = {
  agregarregistro: agregarregistro,
  login: login
};