const {Router} = require('express')

const{
    getClient,
    createClient,
    updateClient,
    deleteClient,
} = require('../controllers/client')

const api = Router()

api.get('/', getClient)
api.post('/', createClient)
api.put('/:id', updateClient)
api.delete('/:id', deleteClient)

module.exports = api
