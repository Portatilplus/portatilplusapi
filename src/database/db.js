import { createPool } from "mysql2/promise";
import { config } from "dotenv";
config();

/**
 * es la conexion a la base de datos del priyecto
 * @type {object}
 */
const pool = createPool({
    host:process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,
    password:process.env.MYSQLPASSWORD,
    port:process.env.MYSQLPORT,
    database:process.env.MYSQLDATABASE,
});


export default pool;