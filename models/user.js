const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    senha: {type: String, require: true}
}, {collection: 'users'})

const model = mongoose.model('userSchema', userSchema)


module.exports = model