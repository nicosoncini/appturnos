const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    nombre: String,
    apellido: String,
})

//Modelo REVISAR
const Client = mongoose.model('Client', clientSchema,'Client');

module.exports = Client

