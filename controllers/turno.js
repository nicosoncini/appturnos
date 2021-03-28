const Turno = require('../models/turno')

const getTurno = async (req, res) => {
    try{
        const turnos = await Turno.find();
        res.send(turnos)
        }
        catch(error) {
            console.log(error);
                    }
}

const createTurno = async (req, res) => {
        try{
            let turno = await new Turno();
            turno.usuario = req.params.id;
            turno.cliente = req.body.cliente;
            turno.fecha = req.body.fecha;
            turno.save();
            res.send('turno creado');
             }
            catch(error) {
                console.log(error);
                        }
}

const updateTurno = async (req, res) => {
    try{    
        const {cliente, fecha}= req.body;
        await Turno.findByIdAndUpdate(req.params.id, {cliente, fecha});
        res.send('turno editado');}
        catch(error) {
            console.log(error)
        }
}

const deleteTurno = async (req, res) => {
    try{
        const {cliente, fecha}= req.body;
        await Turno.findByIdAndDelete(req.params.id, {cliente, fecha});
        res.send('turno eliminado');}
        catch(error) {
            console.log(error)}
}

module.exports = {
    getTurno,
    createTurno,
    updateTurno,
    deleteTurno,
}
