//Inicialización
const express = require ('express');
const server = express();
const dbConnect = require('./database')

server.use(express.json());

//Rutas
const userRoutes = require('./routes/user')
const clientRoutes = require ('./routes/client')
const turnoRoutes = require('./routes/turno')

server.use('/user', userRoutes)
server.use('/client', clientRoutes)
server.use('/turno', turnoRoutes)

module.exports = server