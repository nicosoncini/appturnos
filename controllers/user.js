const User = require('../models/user');
const fetch = require('node-fetch');

const getUser = async (req, res) => {
    try{
        const users = await User.find();
        res.send(users)}
        catch(error) {
            console.log(error);
        }
}


const createUser = async (req, res) => {
        try{
            let user = await new User();
            user.nombre = req.body.nombre;
            user.apellido = req.body.apellido;
            user.save();
            res.send('usuario creado');}
            catch(error) {
                console.log(error)
            }
}

const updateUser = async (req, res) => {
    try{    
        const {nombre, apellido}= req.body;
        await User.findByIdAndUpdate(req.params.id, {nombre, apellido});
        res.send('usuario editado');}
        catch(error) {
            console.log(error)
        }
}

const deleteUser = async (req, res) => {
    try{
        const {nombre, apellido}= req.body;
        await User.findByIdAndDelete(req.params.id, {nombre, apellido});
        res.send('usuario borrado');}
        catch(error) {
            console.log(error)}
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
}
