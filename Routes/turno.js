const {Router} = require('express')

const{
    getTurno,
    createTurno,
    updateTurno,
    deleteTurno,
} = require('../controllers/turno')

const apiTurno = Router()

apiTurno.get('/', getTurno)
apiTurno.post('/:id', createTurno)
apiTurno.put('/:id', updateTurno)
apiTurno.delete('/:id', deleteTurno)

module.exports = apiTurno
