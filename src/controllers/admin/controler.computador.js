/**
 * este es el controlador de computador
 * @module computador
 */
import pool from "../../database/db";
import mensaje from "../../res/mensaje";

//  metodos 
/**
 * esta funcion me sirve para que le adminstrador listar los computadores
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * @returns este es para validar los campos vacios
 */
const listarcomputador = async(req, res)=>{
    try {
        const [respuesta] = await pool.query(`CALL sp_listar_registro_computador();`);
        mensaje.success(req, res, 200,respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error al mostrar computadores")
    }
}
/**
 * esta funcion me sirve para que le adminstrador agregue los computadores
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * @returns este es para validar los campos vacios
 */
const agregarcomputador = async(req, res)=>{
    const {marca,modelo,area,estado} = req.body;


    if(!marca || !modelo || !area || !estado){
        mensaje.error(req, res, 400, "campos vacios");
        return;
    }

    try {
        const respuesta = await pool.query(`CALL sp_agregar_registro_computador('${marca}',
            '${modelo}',
            '${area}',
            '${estado}');`)
        if(respuesta[0].affectedRows==1){
            mensaje.success(req, res, 200, "computador agregado");
        }else{
            mensaje.error(req, res, 500, "error al agregar computador");
        }
    } catch (error) {
        mensaje.error(req, res, 500, "error al agregar computador");
    }
    
}
/**
 * esta funcion me sirve para que le adminstrador modificar los computadores
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 *
 */
const modificarcomputador =async(req, res)=>{
    const {idcomputador, marca, modelo, estado, area} = req.body;
    try {
        const respuesta = await pool.query(`CALL 	sp_modificar_registro_computador('${idcomputador}','${marca}','${modelo}','${estado}','${area}')`)
        if(respuesta[0].affectedRows == 1){
            mensaje.success(req, res, 200, "computador modificado");
        }else{
            mensaje.error(req, res, 400, "computador no modificado");
        }
    } catch (error) {
        mensaje.error(req,res, 500, "error al modificar computador");
    }
};
/**
 * esta funcion me sirve para que le adminstrador elimine los computadores
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
const eleminarcomputador = async (req, res) => {
    const idcomputador = req.params.idcomputador;

    try {
        const respuesta = await pool.query('CALL sp_eliminar_registro_computador(?)', [idcomputador]);

        if (respuesta[0].affectedRows === 1) {
            mensaje.success(req, res, 200, "Computador eliminado");
        } else {
            mensaje.error(req, res, 400, "Error al eliminar computador");
        }
    } catch (error) {
        mensaje.error(req, res, 500, "Error al intentar eliminar");
    }
};



export const metodos ={
    agregarcomputador,
    listarcomputador,
    modificarcomputador,
    eleminarcomputador
}