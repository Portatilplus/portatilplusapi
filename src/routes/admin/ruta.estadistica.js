import { Router } from "express";
import { metodos } from "../../controllers/admin/controller.estadisticas";

const estadistica = Router()

estadistica.get("/estadisticacomputador", metodos.computadordispo)
estadistica.get("/estadisticaaccesorio", metodos.accesoriodispo)
estadistica.get("/estadisticareserva", metodos.reservaactuva)
estadistica.get("/completadas", metodos.completadas)


export default estadistica;