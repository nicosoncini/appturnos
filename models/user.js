const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: String,
    apellido: String,
})

//Modelo REVISAR
const User = mongoose.model('User', userSchema,'User');

module.exports = User
