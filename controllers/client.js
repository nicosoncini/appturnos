const Client = require('../models/client')

const getClient = async (req, res) => {
    try{
        const clients = await Client.find();
        res.send(clients)}
        catch(error) {
            console.log(error);
        }
}

const createClient = async (req, res) => {
        try{
            let client = await new Client();
            client.nombre = req.body.nombre;
            client.apellido = req.body.apellido;
            client.save();
            res.send('cliente creado');}
            catch(error) {
                console.log(error)
            }
}

const updateClient = async (req, res) => {
    try{    
        const {nombre, apellido}= req.body;
        await Client.findByIdAndUpdate(req.params.id, {nombre, apellido});
        res.send('cliente editado');}
        catch(error) {
            console.log(error)
        }
}

const deleteClient = async (req, res) => {
    try{
        const {nombre, apellido}= req.body;
        await Client.findByIdAndDelete(req.params.id, {nombre, apellido});
        res.send('cliente borrado');}
        catch(error) {
            console.log(error)}
}

module.exports = {
    getClient,
    createClient,
    updateClient,
    deleteClient,
}