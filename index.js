//Server
const express = require('express')
const server = express()
server.listen(process.env.PORT, () => {
    console.log(`Server escuchando en puerto ${process.env.PORT}`);
});