
import express from 'express';
import clientesController from './Controllers/clientes-controller.js';
import bd from './database/sqlite-bd.js';
import cors from 'cors'


const app = express()


/* Middlware necessario para fazer o parser do
Json recebido do body em objeto*/
app.use(express.json())
app.use(cors())

clientesController(app,bd)

export default app




