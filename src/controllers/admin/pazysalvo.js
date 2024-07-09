import pool  from "../../database/db";
import mensaje from "../../res/mensaje";


const agregarpazysalvo = async(req, res)=>{
    const {nombre, apellido, telefono,sanciones,descripcion} = req.body;
    
    if(!nombre ||!nombre || !telefono || !sanciones || !descripcion){
        mensaje.error(req, res, 400, "faltan datos");
        return;
    }

    try {
        const respuesta = await pool.query(`CALL sp_agregar_paysalvo('${nombre}','${apellido}','${telefono}','${sanciones}','${descripcion}');`)
        if(respuesta[0].affectedRows == 1){
            mensaje.success(req, res, 200, "paz y salvo creado");
        }else{
            mensaje.error(req, res, 400, "paz y alvo no creado");
        }
    } catch (error) {
        mensaje.error(req,res, 500, "error al agregar paz y alvo");
    }
};

const listarpazysalvo =async(req, res)=>{ 
    try {
        const respuesta = await pool.query(`CALL sp_listar_pazsalvo();`);
        mensaje.success(req, res, 200, respuesta[0]);
    } catch (error) {
        mensaje.error(req, res, 500, "error al mostrar");
    }
};

const modificarpazysalvo =async(req, res)=>{
    const {idpazysalvo,nombre, apellido, telefono,sanciones,descripcion} = req.body;
    try {
        const respuesta = await pool.query(`CALL sp_modificar_pazsalvo(${idpazysalvo},'${nombre}','${apellido}','${telefono}','${sanciones}','${descripcion}');`)
        if(respuesta[0].affectedRows == 1){
            mensaje.success(req, res, 200, "paz y salvo modificado");
        }else{
            mensaje.error(req, res, 400, "paz y salvo no modificado");
        }
    } catch (error) {
        mensaje.error(req,res, 500, "error al modificar paz y salvo");
    }
};

const eliminarpazysalvo =async(req, res)=>{
    const idpazysalvo = req.params.idpazysalvo;
    try {
        const respuesta = await pool.query(`CALL 	sp_borrar_pazsalvo(?);`,[idpazysalvo]);
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
    agregarpazysalvo,
    listarpazysalvo,
    modificarpazysalvo,
    eliminarpazysalvo
};