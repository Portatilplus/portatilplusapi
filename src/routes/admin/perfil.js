import { Router } from "express";
import { metodos } from "../../controllers/controler.registro";

const perfil = Router();


perfil.put("/perfil", metodos.editarperfil)


export default perfil;
