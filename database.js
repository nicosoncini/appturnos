//DB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nico:A77aques@cluster0.1e5a1.mongodb.net/App?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('DB conectada'))
    .catch(err => console.error('err'));


module.exports = db