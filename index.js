//Inicialización
const express = require ('express');
const app = express();

//DB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nico:A77aques@cluster0.1e5a1.mongodb.net/App?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('DB conectada'))
    .catch(err => console.error('err'));

//Schemas
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
})

const clienteSchema = new Schema({
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

//Modelo
const Usuario = mongoose.model('Usuario', usuarioSchema,'Usuario');
const Cliente = mongoose.model('Cliente', clienteSchema,'Cliente');
const Turno = mongoose.model('Turno', turnoSchema,'Turno');

app.use(express.json());

//Rutas
app.post('/usuario', async (req,res) =>{
    res.send('usuario creado');
    let usuario = await new Usuario();
    usuario.nombre = req.body.nombre;
    usuario.apellido = req.body.apellido;
    usuario.save();
})

app.post('/cliente', async (req,res) => {
    res.send('cliente creado')
    let cliente = await new Cliente();
    cliente.nombre = req.body.nombre;
    cliente.apellido = req.body.apellido;
    cliente.save();
})

app.post('/turnos/:id', async (req, res) => {
    res.send('turno agendado')
    let turno = await new Turno();
    turno.usuario = req.params.id;
    turno.cliente = req.body.cliente;
    turno.fecha = req.body.fecha;
    turno.horario = req.body.horario;
    turno.save();
})


app.get('/usuario', async (req, res) => {
    const usuarios = await Usuario.find()
    res.send(usuarios)
});


app.put('/edit-usuario/:id', async (req, res) =>{
    const {nombre, apellido}= req.body;
    await Usuario.findByIdAndUpdate(req.params.id, {nombre, apellido});
    res.send('usuario editado')
});


app.delete('/delete-usuario/:id', async (req, res) =>{
    const {nombre, apellido}= req.body;
    await Usuario.findByIdAndDelete(req.params.id, {nombre, apellido});
    res.send('usuario borrado');
});

//Server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('server escuchando');
});