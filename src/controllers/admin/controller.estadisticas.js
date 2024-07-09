import pool from "../../database/db";
import mensaje from "../../res/mensaje";


const computadordispo = async (req, res) =>{
    try {
        const respuesta = await pool.query(`CALL sp_mostrar_computadores()`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error en la estadistica");
    }
}

const accesoriodispo = async (req, res) =>{
    try {
        const respuesta = await pool.query(`CALL sp_mostrar_accesorios()`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error en la estadistica");
    }
} 

const reservaactuva = async (req, res) =>{
    try {
        const respuesta = await pool.query(`CALL sp_mostrar_reserva()`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error en la estadistica");
    }
}


const diseño = async (req, res) => {
    try {
        const respuesta = await pool.query(`CALL sp_mostrar_diseño()`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error en la estadistica");
    }
}
const administracion = async (req, res) => {
    try {
        const respuesta = await pool.query(`CALL sp_mostrar_administracion()`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error en la estadistica");
    }
}
const software = async (req, res) => {
    try {
        const respuesta = await pool.query(`CALL sp_mostrar_software()`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error en la estadistica");
    }
}





export const metodos = {
    computadordispo,
    accesoriodispo,
    reservaactuva,
    diseño,
    administracion,
    software
}