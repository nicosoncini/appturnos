const {Router} = require('express')

const{
    getUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/user')

const api = Router()

api.get('/', getUser)
api.post('/', createUser)
api.put('/:id', updateUser)
api.delete('/:id', deleteUser)

module.exports = api
