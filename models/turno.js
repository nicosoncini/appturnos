const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const turnoSchema = new Schema({
    fecha: Date,
    usuario: String,
    cliente: String,
})

//Modelo
const Turno = mongoose.model('Turno', turnoSchema,'Turno');

module.exports = Turno
