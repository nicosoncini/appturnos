//Server
const server = require('./server')
server.listen(3000, () => {
    console.log(`Server escuchando en puerto ${process.env.PORT}`);
});

//process.env.PORT
