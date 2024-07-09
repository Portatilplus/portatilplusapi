"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controler = require("../../controllers/admin/controler.notas");
var _oauth = require("../../middleware/oauth");
var rutanota = (0, _express.Router)();
rutanota.post("/notas", _controler.metod.agregarnotas);
rutanota.get("/notas", _controler.metod.listarnotas);
rutanota.put("/notas", _controler.metod.modificarnotas);
rutanota["delete"]("/notas/:idnotas", _controler.metod.eliminarnotas);
var _default = exports["default"] = rutanota;