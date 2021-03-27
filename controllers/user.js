const User = require('../models/user')

const getUser = async (req, res) => {
    const users = await User.find()
    res.send(users)
}

const createUser = async (req, res) => {
        let user = await new User();
        user.nombre = req.body.nombre;
        user.apellido = req.body.apellido;
        user.save();
        res.send('usuario creado');
}

const updateUser = async (req, res) => {
    const {nombre, apellido}= req.body;
    await User.findByIdAndUpdate(req.params.id, {nombre, apellido});
    res.send('usuario editado');
}

const deleteUser = async (req, res) => {
    const {nombre, apellido}= req.body;
    await User.findByIdAndDelete(req.params.id, {nombre, apellido});
    res.send('usuario borrado');
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
}