//Inicialización
const express = require ('express');
const server = express();
const dbConnect = require('./database')

server.use(express.json());

//Rutas
const apiUser = require('./routes/user')
const apiClient = require ('./routes/client')
const apiTurno = require('./routes/turno')

server.use('/user', apiUser)
server.use('/client', apiClient)
server.use('/turno', apiTurno)

module.exports = server