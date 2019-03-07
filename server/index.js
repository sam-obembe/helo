require('dotenv').config()
const express = require('express')
const ac = require('./controllers/authController')
const bodyParser = require('body-parser')
const massive = require('massive')
const app = express()
const port = 4000

app.use(bodyParser.json())
massive(process.env.SIM_DB).then(db=>{
  app.set('db',db)
  console.log(`database connected`)
}).catch(err=>console.log(err))



app.post("/api/auth/register",ac.register)
app.post("/api/auth/login",ac.login)



app.listen(port, ()=>console.log(`listening on ${port}`))
