import express from 'express';
import { config } from 'dotenv';
import rutas from './routes';
import morgan from 'morgan';
import cors from 'cors';
import os from 'node:os'
config();

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// app.use(cors({
//     origin: 'https://frontportatil.onrender.com', // Replace with your frontend origin
//     credentials: true // Allow cookies to be sent with requests
// }));
app.use(cors())



// rutas
app.use("/", rutas);


// puerto
app.set("port", process.env.PORT || 3000);

export default app;