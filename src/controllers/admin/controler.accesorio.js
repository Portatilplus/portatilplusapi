/**
 * este es el controlador de accesorios
 * @module accesorios
 */
import pool  from "../../database/db";
import mensaje from "../../res/mensaje";


/**
 * esta funcion me sirve para que le adminstrador agregue los accesorios
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * @returns este es para validar los campos vacios
 */
const agregaraccesorio = async(req, res)=>{
    const {numero_accesorio, nombre_accesorio, estado} = req.body;
    
    if(!numero_accesorio ||!nombre_accesorio){
        mensaje.error(req, res, 400, "faltan datos");
        return;
    }

    try {
        const respuesta = await pool.query(`CALL sp_agregar_accesorios('${numero_accesorio}','${nombre_accesorio}','${estado}');`)
        if(respuesta[0].affectedRows == 1){
            mensaje.success(req, res, 200, "accesorio creado");
        }else{
            mensaje.error(req, res, 400, "accesorio no creado");
        }
    } catch (error) {
        mensaje.error(req,res, 500, "error al agregar accesorio");
    }
};
/**
 * esta funcion me sirve para que le adminstrador liste los accesorios
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
const listaraccesorio =async(req, res)=>{ 
    try {
        const respuesta = await pool.query(`CALL sp_listar_accesorios();`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error al mostrar");
    }
};
/**
 * esta funcion me sirve para que le adminstrador modifique los accesorios
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
const modificaraccesorio =async(req, res)=>{
    const {id_accesorio, numero_accesorio, nombre_accesorio, estado} = req.body;
    try {
        const respuesta = await pool.query(`CALL sp_modificar_accesorios('${id_accesorio}','${numero_accesorio}','${nombre_accesorio}','${estado}')`)
        if(respuesta[0].affectedRows == 1){
            mensaje.success(req, res, 200, "accesorio modificado");
        }else{
            mensaje.error(req, res, 400, "accesorio no modificado");
        }
    } catch (error) {
        mensaje.error(req,res, 500, "error al modificar accesorio");
    }
};
/**
 * esta funcion me sirve para que le adminstrador elimine los accesorios
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
const eliminaraccesorio =async(req, res)=>{
    const id_accesorio = req.params.id_accesorio;
    try {
        const respuesta = await pool.query(`CALL sp_eliminar_accesorio(?);`,[id_accesorio]);
        if(respuesta[0].affectedRows == 1){
            mensaje.success(req, res, 200, "accesorio eliminado");
        }else{
            mensaje.error(req, res, 400, "accesorio no eliminado");
        }
    } catch (error) {
        mensaje.error(req, res, 500, "error al elminar");
    }
};

export const metodos ={
    agregaraccesorio,
    listaraccesorio,
    modificaraccesorio,
    eliminaraccesorio
};