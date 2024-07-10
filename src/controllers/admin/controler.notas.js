/**
 * este es el controlador de notas
 * @module notas
 */
import pool from "../../database/db";
import mensaje from "../../res/mensaje";

/**
 * esta funcion me sirve para que le adminstrador agregue las notas
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
const agregarnotas = async(req, res)=>{
    const {titulo,notas, prioridad, estado}= req.body;

    try {
        const respuesta = await pool.query(`CALL inssrtar_nota('${titulo}','${notas}','${prioridad}','${estado}');`)
    if(respuesta[0].affectedRows == 1){
        mensaje.success(req, res, 200, "Notas agregadas");
    }else{
        mensaje.error(req, res, 400, "Notas no agregadas");
    }
    } catch (error) {
        mensaje.error(req, res, 400, "Notas no agregadas");    
    }

}
/**
 * esta funcion me sirve para que le adminstrador agregue los accesorios
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
const listarnotas = async(req, res)=>{
    try {
        const respuesta = await pool.query(`CALL sp_listar_notas();`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "Error al mostrar");
    }
 
}
/**
 * esta funcion me sirve para que le adminstrador modifique las notas
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 */
const modificarnotas = async(req, res)=>{
    const {idnotas, titulo,  notas, prioridad, estado} = req.body;

    try {
        const respuesta = await pool.query(`CALL sp_editar_notas(?,?,?,?,?);`,[idnotas, titulo, notas, prioridad, estado])
        if(respuesta[0].affectedRows == 1){
            mensaje.success(req, res, 200, "Notas modificadas");
        }else{
            mensaje.error(req, res, 400, "Notas no modificadas");
        }
    } catch (error) {
        mensaje.error(req, res, 400, "error");
    }
}
/**
 * esta funcion me sirve para que le adminstrador elimine las notas
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 */
const eliminarnotas = async(req, res)=>{
    const idnotas = req.params.idnotas;
    try {
        const respuesta = await pool.query(`CALL sp_aliminar_notas(${idnotas});`);
        if(respuesta[0].affectedRows == 1){
            mensaje.success(req, res, 200, "Notas eliminadas");
        }else{
            mensaje.error(req, res, 400, "Notas no eliminadas");
        }
    } catch (error) {
        mensaje.error(req, res, 400, "error al eliminar");
    }
}

export const metod = {
    agregarnotas,
    listarnotas,
    modificarnotas,
    eliminarnotas
}