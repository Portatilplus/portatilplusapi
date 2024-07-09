"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _swaggerAutogen = _interopRequireDefault(require("swagger-autogen"));
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var port = process.env.PORT || 3000;
var doc = {
  info: {
    title: "BACKEND",
    description: "manejo de usuarios"
  },
  host: "localhost:" + port + "/admin"
};
// crea un archivo de tipo json
var outputFile = "./swagger-output.json";
var routes = ["../routes/admin/ruta.accesorio", "../routes/admin/ruta.computador", "../routes/admin/ruta.historial", "../routes/admin/ruta.nota", "../routes/admin/ruta.retiro", "../routes/admin/ruta.sancion", "../routes/user/ruta.reserva", "../routes/ruta.registro"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

(0, _swaggerAutogen["default"])()(outputFile, routes, doc);