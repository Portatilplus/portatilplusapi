import { Router } from "express";
import { metodos } from "../../controllers/admin/pazysalvo";
const pazysalvo = Router();


pazysalvo.get("/salvo", metodos.listarpazysalvo)
pazysalvo.post("/salvo", metodos.agregarpazysalvo)
pazysalvo.put("/salvo", metodos.modificarpazysalvo)
pazysalvo.delete("/salvo/:idpazysalvo", metodos.eliminarpazysalvo)

export default pazysalvo;