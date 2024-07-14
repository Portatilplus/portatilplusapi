import { Router } from "express";
import { metodos } from "../../controllers/controler.registro";

const perfil = Router();


perfil.put("/perfil", metodos.editarperfil)
perfil.get("/perfil/:id_registro", metodos.perfilunuico);


export default perfil;
