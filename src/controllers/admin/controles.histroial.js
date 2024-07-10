/**
 * este es el controlador de historial
 * @module historial
 */
import pool from "../../database/db";
import mensaje from "../../res/mensaje";


// historial completo
/**
 * esta funcion me sirve para que mostar el historial
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
const historial = async(req, res)=>{
    try {
        const respuesta = await pool.query(`CALL sp_historial_usuarios();`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error en el historial");
    }
}


// historial especifico
/**
 * esta funcion me sirve para historial de las reservas
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
const listarhistorial = async(req, res)=>{
    const {id_reserva} = req.params;

    try {
        const respuesta = await pool.query(`CALL sp_listar_historial(?);`,[id_reserva]);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error en listar historial");
    }
}

/**
 * esta funcion me sirve para historial de las reservas
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
const historialreserva = async(req, res)=>{
    try {
        const respuesta = await pool.query(`CALL sp_historial_reserva();`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error en el historial");
    }
}



export const metodos = {
    historial,
    listarhistorial,
    historialreserva
}