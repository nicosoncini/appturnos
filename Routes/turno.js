const {Router} = require('express')

const{
    getTurno,
    createTurno,
    updateTurno,
    deleteTurno,
} = require('../controllers/turno')

const api = Router()

api.get('/', getTurno)
api.post('/:id', createTurno)
api.put('/:id', updateTurno)
api.delete('/:id', deleteTurno)

module.exports = api
