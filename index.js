//Server
const server = require('./server')
server.listen(process.env.PORT, () => {
    console.log(`Server escuchando en puerto ${process.env.PORT}`);
});