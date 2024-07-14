"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controler = require("../../controllers/controler.registro");
var perfil = (0, _express.Router)();
perfil.put("/perfil", _controler.metodos.editarperfil);
perfil.get("/perfil/:id_registro", _controler.metodos.perfilunuico);
var _default = exports["default"] = perfil;