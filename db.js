const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://jv:senhajv@login.gp7oo.mongodb.net/login?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Conectado...");
}).catch((err) => {
    console.log("Houve um erro: " + err);
});

//definindo
const user = mongoose.Schema({
    nome:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    senha:{
        type: String,
        require:true,
    },
})

const cadastrar = mongoose.model('users', user)
/*
new cadastrar({
    nome: 'jv',
    email: 'jv@mail.com',
    senha: 'senhadojv'
}).save()
*/
