//imports
const express = require('express')
const app = express()
const path = require('path')
const flash = require("connect-flash")
const session = require('express-session')
const mongoose = require('mongoose')
const user = require('./models/user')
const bcrypt = require('bcrypt')


//setup
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(session({
    secret: 'afuckingdifficulthash',
    resave: false,
    saveUninitialized:true,
    cookie: {
        maxAge: 1000 * 60 * 60* 24 * 1
      }
}))

//database (mongodb)
const db = mongoose.connect('mongodb+srv://jv:senhajv@login.gp7oo.mongodb.net/login?retryWrites=true&w=majority', 
{useNewUrlParser:true, useUnifiedTopology:true})


//rotas
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login', {
        error: false
    })
})

app.get('/signup', (req, res) => {
    res.render('signup', {
        error:false
    })
})

app.post('/redirect-login', async (req, res) => {
    const {email, password} = req.body
    try{
        const dbuser = await user.findOne({email}).lean()
        if(await bcrypt.compare(password, dbuser.senha)){
            req.session.nome = dbuser.name
            res.redirect('/app')
        }else{
            return res.render('login', {
                error: true
            })
        }
    }
    catch{
        return res.render('login', {
            error: true
        })
    }
})

app.post('/redirect-signup', async (req, res) => {
    const {name, email, password} = req.body
    const senha = await bcrypt.hash(password, 10)
    if(await (await user.find({email}).lean()).length > 0){
        res.render('signup', {
            error:true
        })
    }
    else{
        user.create({
            name, 
            email,
            senha
        }).then(()=>{
            req.session.nome = name
            return res.redirect('/app')
        })
    }

})

app.get('/app', (req, res)=>{
    res.render('app', {
        nome:req.session.nome
    })
})


app.listen(3000, () => {console.log('rodando em: http://localhost:3000')})