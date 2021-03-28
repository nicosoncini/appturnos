const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const turnoSchema = new Schema({
    fecha: Date,
    usuario: Schema.Types.ObjectId,
    cliente: Schema.Types.ObjectId,
})

//Modelo
const Turno = mongoose.model('Turno', turnoSchema,'Turno');

module.exports = Turno
