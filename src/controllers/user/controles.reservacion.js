import pool from "../../database/db";
import mensaje from "../../res/mensaje";



// const reservacion = async (req, res) => {
//     // TIENE QUE HACER QUE EL USUARIO RESREVE LOS COMPUTADORES Y EN ESE MOMENTO DE DARLE CLICK AHI TAMBIEN SE 
//     // SE TIENE QUE HACER QUE EL ESTADO DE ESE COMPUTADOR PASE A RESERVADO
//     const {nombre, id_accesorio, id_registro_computador, estado, fecha} = req.body;

//     // primeramente se tienen que mostrar los computadores disponibles
//     // despues se tienen que mostrar los accesorios disponibles
//     try {
//         const disponiblescompu = await pool.query(`CALL sp_mostrar_computadores();`);
//         if(disponiblescompu.length == 0 || disponiblescompu[0].estado !== 'Disponible'){
//             return mensaje.error(req,res, 400, "computador no disponible");
//         }
//         // accesosrio
//         const disponiblesacce = await pool.query(`CALL sp_mostrar_accesorios();`);
//         if(disponiblesacce.length == 0 || disponiblesacce[0].estado !== 'Disponible'){
//             return mensaje.error(req,res, 400, "computador no disponible");
//         }

//         // realizar reserva

//         const respuesta = await pool.query(`CALL sp_realizar_reserva(?,?,?,?,?);`, [nombre,id_accesorio,id_registro_computador, estado, fecha]);
//         if(respuesta[0].affectedRows == 1){
//            return mensaje.success(req, res, 200, "reserva realizada");
//         }else{
//             return mensaje.error(req, res, 400, "error al realizar reserva");
//         }
//     } catch (error) {
//         mensaje.error(req, res, 400, "error al realizar reserva");
        
//     }
    

    
// }

const reservacion = async (req, res) => {
    const { nombre, id_registro_computador, estado } = req.body;
    let connection;

    try {
        // Iniciar la transacción
        connection = await pool.getConnection();
        await connection.beginTransaction();

        // Realizar la reserva del computador
        const [respuestaResult] = await connection.query(`CALL sp_realizar_reserva(?, ?, ?, ?);`, [nombre, null, id_registro_computador, estado]);
        const respuesta = respuestaResult[0];

        if (!respuesta || respuesta.affectedRows !== 1) {
            await connection.rollback();
            return mensaje.error(req, res, 400, "Error al realizar reserva del computador");
        }

        // Confirmar transacción
        await connection.commit();
        return mensaje.success(req, res, 200, "Reserva del computador realizada correctamente");
        
    } catch (error) {
        console.error(error);
        // Revertir transacción en caso de error
        if (connection) {
            await connection.rollback();
        }
        return mensaje.error(req, res, 500, "Error al realizar reserva");
    } finally {
        // Liberar conexión
        if (connection) {
            connection.release();
        }
    }
}






export default reservacion;