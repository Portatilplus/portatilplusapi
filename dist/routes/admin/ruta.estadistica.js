"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controller = require("../../controllers/admin/controller.estadisticas");
var estadistica = (0, _express.Router)();
estadistica.get("/estadisticacomputador", _controller.metodos.computadordispo);
estadistica.get("/estadisticaaccesorio", _controller.metodos.accesoriodispo);
estadistica.get("/estadisticareserva", _controller.metodos.reservaactuva);
estadistica.get("/completadas", _controller.metodos.completadas);
var _default = exports["default"] = estadistica;