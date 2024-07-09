"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _pazysalvo = require("../../controllers/admin/pazysalvo");
var pazysalvo = (0, _express.Router)();
pazysalvo.get("/salvo", _pazysalvo.metodos.listarpazysalvo);
pazysalvo.post("/salvo", _pazysalvo.metodos.agregarpazysalvo);
pazysalvo.put("/salvo", _pazysalvo.metodos.modificarpazysalvo);
pazysalvo["delete"]("/salvo/:idpazysalvo", _pazysalvo.metodos.eliminarpazysalvo);
var _default = exports["default"] = pazysalvo;