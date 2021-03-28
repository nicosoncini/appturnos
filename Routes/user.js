const {Router} = require('express')

const{
    getUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/user')

const apiUser = Router()

apiUser.get('/', getUser)
apiUser.post('/', createUser)
apiUser.put('/:id', updateUser)
apiUser.delete('/:id', deleteUser)

module.exports = apiUser