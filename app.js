const express = require('express')

const app = express()



const rotas = require('./router')

app.use(express.json());

app.use('/api', rotas)

app.listen(3000, ()=>{
    console.log("Servidor Iniciado")
})