import { Router } from "express";
import { metod } from "../../controllers/admin/controler.notas";
import { verificarToken } from "../../middleware/oauth";

const rutanota = Router();


rutanota.post("/notas", metod.agregarnotas)
rutanota.get("/notas", metod.listarnotas)
rutanota.put("/notas", metod.modificarnotas)
rutanota.delete("/notas/:idnotas", metod.eliminarnotas)



export default rutanota;