app.post('/usuario', async (req,res) =>{
    res.send('usuario creado');
    let usuario = await new Usuario();
    usuario.nombre = req.body.nombre;
    usuario.apellido = req.body.apellido;
    usuario.save();
})


app.get('/usuario', async (req, res) => {
    const usuarios = await Usuario.find()
    res.send(usuarios)
});


app.get('/', async (req, res) => {
    res.send('app turnos')
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

var formData = {
    "nombre": "Hola",
    "apellido": "Chau"
};
var fileField = document.querySelector("Content-Type='application/json']");

formData.append('nombre', 'apellido');

fetch('https://tunosapp.herokuapp.com/crea-usuario', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));