const {Router} = require('express')

const{
    getClient,
    createClient,
    updateClient,
    deleteClient,
} = require('../controllers/client')

const apiClient = Router()

apiClient.get('/', getClient)
apiClient.post('/', createClient)
apiClient.put('/:id', updateClient)
apiClient.delete('/:id', deleteClient)

module.exports = apiClient
