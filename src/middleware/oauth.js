import jwt from "jsonwebtoken";
import mensajes from "../res/mensaje";
import { config } from "dotenv";

config();


export const verificarToken =async (req, res, next) => {
    const token = req.headers["x-access-token"]

    if(!token){
       return mensajes.success(req, res, 401, "acceso denegado");
    }

    try {
        const verificado = await jwt.verify(token, process.env.PRIVATE_KEY);
        
        if(verificado.rol !== 'Admin'){
            return mensajes.success(req, res, 401, "acceso denegado");
        }
        req.user = verificado;

        next();
        
    } catch (error) {
        return mensajes.error(req, res, 400, "token no valido");
    }
}


