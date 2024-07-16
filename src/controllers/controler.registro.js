/**
 * este es el controlador de usuarios
 * @module usuarios
 */

import bcrypt from "bcrypt"
import pool from "../database/db.js";
import mensajes from "../res/mensaje";
import jwt from "jsonwebtoken";
import { config } from 'dotenv';
import nodemailer from 'nodemailer';
config();



/**
 * esta funcion me sirve para que un usuario se pueda registrar
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
const agregarregistro =async(req, res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const correo = req.body.correo;
    const contrasenasincifrar = req.body.contrasena;
    const rol = req.body.rol;
    const estado = req.body.estado;
    const contrasena = req.body.contrasena;

    

    if(!nombre || !apellido || !telefono || !telefono || !correo || !contrasena || !rol||!estado){
        mensajes.error(req, res, 400, "campos vacios");
        return;
    }
    try {
        const salt = await bcrypt.genSalt(5) ;
        const hash = await bcrypt.hash(contrasenasincifrar, salt );
        const contrasena = hash;

        const respuesta = await pool.query(`CALL sp_agregar_registro_usuario(?,?,?,?,?,?,?);`,[nombre,
            apellido,
            telefono,
            correo,
            contrasena,
            rol,
            estado]);


        // validar el campo de exitososo registro
        if(respuesta[0].affectedRows == 1){
            let msg = `
                Hola ${nombre},
                Tu usuario es el correo y tu contraseña
                para que ingrese a el sistema.
                
                Tu usuario sera: ${correo}
                Tu clave sera: ${contrasenasincifrar}

                !Bienvenido a nuestro sistema Portatil Plus¡
            `;
            sendEmail(msg, correo, "Creacion de cuenta Portatil Plus")
            mensajes.success(req, res, 200, "usuario creado");
        }else{
            mensajes.error(req, res,400, "usuario no creado");
        }

        
    } catch (error) {

        mensajes.error(req, res, 500, "error al agregar registro");
    }
}
// este es el de login

/**
 * esta funcion me sirve para que un usuario se pueda loguear
 * 
 * @param {object} req captura peticiones en html
 * @param {object} res envia peteciones en html
 * 
 */
const login = async(req, res)=>{
    const {correo, contrasena}  = req.body;
    

    if(!correo || !contrasena){
        mensajes.error(req, res, 401, "campos vacios");
        return;
    }
    try {
        const resultado = await pool.query(`CALL sp_login(?);`,[correo]);
        if (resultado[0][0].length===0) {
            mensajes.error(req, res, 400, "Usuario no encontrado");
            return;
    }
        const contracorrecta = await bcrypt.compare(contrasena, resultado[0][0][0].contrasena);
        if (!contracorrecta) {
            mensajes.error(req, res, 400, "contraseña incorrecta");
            return;
        }else{
            const payload ={
                id_registro: resultado[0][0][0].id_registro,
                nombre:resultado[0][0][0].nombre,
                apellido: resultado[0][0][0].apellido,
                telefono: resultado[0][0][0].telefono,
                correo: resultado[0][0][0].correo,
                rol : resultado[0][0][0].rol,
                estado: resultado[0][0][0].estado,
            }
            let token = jwt.sign(
                payload,
                process.env.PRIVATE_KEY,
                {expiresIn: process.env.EXPIRES_IN});
    
          mensajes.success(req, res, 200, {token, payload});
         
        }    
    } catch (error) {
        mensajes.error(req, res, 500, "error al loguearse");
    }
}
const editarperfil = async(req, res) => {
    const {id_registro, nombre, apellido, telefono,correo} = req.body;
    try {
        const respuesta = await pool.query(`CALL sp_editar_perfil('${id_registro}',
            '${nombre}',
            '${apellido}',
            '${telefono}',
            '${correo}');`);
        if(respuesta[0].affectedRows == 1){
            mensajes.success(req, res, 200, "perfil editado");
        }else{
            mensajes.error(req, res, 400, "perfil no editado");
        }
    } catch (error) {
        mensajes.error(req, res, 500, "error al editar");
    }
}
const perfilunuico = async(req, res) => {
    const {id_registro} = req.params;
    try {
        const respuesta = await pool.query(`CALL sp_perfil_unico('${id_registro}');`);
        mensajes.success(req, res, 200, respuesta[0]);

    } catch (error) {
        mensajes.error(req, res, 500, "error al editar");
    }
}

/**
 * estos son para mandar una notificacion al correo de cuando se registro
 * @param {*} message 
 * @param {*} receiverEmail 
 * @param {*} subject 
 */
const sendEmail = async (message, receiverEmail, subject) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        secure: false,
        auth: {
            user: process.env.EMAILER_CORREO,
            pass: process.env.EMAILER_CONTRASENA
        }
    })
    let info = await transporter.sendMail({
        from: process.env.EMAILER_CORREO,
        to: receiverEmail,
        subject: subject,
        text: message
    })
    console.log("se ha enviado al correo", info.messageId);
}




export const metodos={
    agregarregistro,
    login,
    editarperfil,
    perfilunuico
}


