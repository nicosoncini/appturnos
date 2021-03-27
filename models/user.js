//Schemas
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: String,
    apellido: String,
})

//Modelo REVISAR
const User = mongoose.model('User', userSchema,'User');

module.exports = User




/*const clienteSchema = new Schema({
    nombre: String,
    apellido: String,
    servicio: String,
})

const turnoSchema = new Schema({
    fecha: String,
    horario: String,
    usuario: String,
    cliente: String,
})

//Schemas


//Modelo
//const Cliente = mongoose.model('Cliente', clienteSchema,'Cliente');
//const Turno = mongoose.model('Turno', turnoSchema,'Turno');
*/
