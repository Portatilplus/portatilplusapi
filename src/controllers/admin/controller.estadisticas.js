/**
 * este es el controlador de estadisticas
 * @module estadisticas
 */
import pool from "../../database/db";
import mensaje from "../../res/mensaje";



// historial completo
/**
 * esta funcion me sirve para que mostrar las estadisticas de los computadore
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
const computadordispo = async (req, res) =>{
    try {
        const respuesta = await pool.query(`CALL sp_mostrar_computadores()`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error en la estadistica");
    }
}


// historial completo
/**
 * esta funcion me sirve para que mostar las estadisticas de los accesorios
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
const accesoriodispo = async (req, res) =>{
    try {
        const respuesta = await pool.query(`CALL sp_mostrar_accesorios()`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error en la estadistica");
    }
} 


// historial completo
/**
 * esta funcion me sirve para que mostar las estadisticas de las reservas
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
const reservaactuva = async (req, res) =>{
    try {
        const respuesta = await pool.query(`CALL sp_mostrar_reserva()`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error en la estadistica");
    }
}




// sp_listar_completadas


const completadas = async (req, res) => {
    try {
        const respuesta = await pool.query(`CALL sp_listar_completadas()`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error en la estadistica");
    }
}

export const metodos = {
    computadordispo,
    accesoriodispo,
    reservaactuva,
    completadas
}