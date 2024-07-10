"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _db = _interopRequireDefault(require("../../database/db"));
var _mensaje = _interopRequireDefault(require("../../res/mensaje"));
// const reservacion = async (req, res) => {
//     // TIENE QUE HACER QUE EL USUARIO RESREVE LOS COMPUTADORES Y EN ESE MOMENTO DE DARLE CLICK AHI TAMBIEN SE 
//     // SE TIENE QUE HACER QUE EL ESTADO DE ESE COMPUTADOR PASE A RESERVADO
//     const {nombre, id_accesorio, id_registro_computador, estado, fecha} = req.body;

//     // primeramente se tienen que mostrar los computadores disponibles
//     // despues se tienen que mostrar los accesorios disponibles
//     try {
//         const disponiblescompu = await pool.query(`CALL sp_mostrar_computadores();`);
//         if(disponiblescompu.length == 0 || disponiblescompu[0].estado !== 'Disponible'){
//             return mensaje.error(req,res, 400, "computador no disponible");
//         }
//         // accesosrio
//         const disponiblesacce = await pool.query(`CALL sp_mostrar_accesorios();`);
//         if(disponiblesacce.length == 0 || disponiblesacce[0].estado !== 'Disponible'){
//             return mensaje.error(req,res, 400, "computador no disponible");
//         }

//         // realizar reserva

//         const respuesta = await pool.query(`CALL sp_realizar_reserva(?,?,?,?,?);`, [nombre,id_accesorio,id_registro_computador, estado, fecha]);
//         if(respuesta[0].affectedRows == 1){
//            return mensaje.success(req, res, 200, "reserva realizada");
//         }else{
//             return mensaje.error(req, res, 400, "error al realizar reserva");
//         }
//     } catch (error) {
//         mensaje.error(req, res, 400, "error al realizar reserva");

//     }

// }

var reservacion = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, nombre, id_registro_computador, estado, connection, _yield$connection$que, _yield$connection$que2, respuestaResult, respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, id_registro_computador = _req$body.id_registro_computador, estado = _req$body.estado;
          _context.prev = 1;
          _context.next = 4;
          return _db["default"].getConnection();
        case 4:
          connection = _context.sent;
          _context.next = 7;
          return connection.beginTransaction();
        case 7:
          _context.next = 9;
          return connection.query("CALL sp_realizar_reserva(?, ?, ?, ?);", [nombre, null, id_registro_computador, estado]);
        case 9:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
          respuestaResult = _yield$connection$que2[0];
          respuesta = respuestaResult[0];
          if (!(!respuesta || respuesta.affectedRows !== 1)) {
            _context.next = 17;
            break;
          }
          _context.next = 16;
          return connection.rollback();
        case 16:
          return _context.abrupt("return", _mensaje["default"].error(req, res, 400, "Error al realizar reserva del computador"));
        case 17:
          _context.next = 19;
          return connection.commit();
        case 19:
          return _context.abrupt("return", _mensaje["default"].success(req, res, 200, "Reserva del computador realizada correctamente"));
        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
          // Revertir transacción en caso de error
          if (!connection) {
            _context.next = 28;
            break;
          }
          _context.next = 28;
          return connection.rollback();
        case 28:
          return _context.abrupt("return", _mensaje["default"].error(req, res, 500, "Error al realizar reserva"));
        case 29:
          _context.prev = 29;
          // Liberar conexión
          if (connection) {
            connection.release();
          }
          return _context.finish(29);
        case 32:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 22, 29, 32]]);
  }));
  return function reservacion(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var _default = exports["default"] = reservacion;