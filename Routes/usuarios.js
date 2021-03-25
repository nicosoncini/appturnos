app.post('/crea-usuario', async (req,res) =>{
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


fetch('/crea-usuario', {
  method: 'POST',
  body: JSON.stringify({
    "nombre": "Hola",
    "apellido": "Chau"
}),
  headers: {
      'Content-Type' : 'application/json'
    },
})
.then(response => {
    console.log('hola')
})