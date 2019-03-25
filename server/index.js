require('dotenv').config()
const express = require('express')
const con = require('./controller')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')
const app = express()
const port = 4000

app.use(bodyParser.json())
massive(process.env.SIM_DB).then(db=>{
  app.set('db',db)
  console.log(`database connected`)
}).catch(err=>console.log(err))

app.use(session({
  secret: process.env.SECRET_SESH,
  resave: false,
  saveUninitialized: true,
}))


app.post("/api/auth/register",con.register)
app.post("/api/auth/login",con.login)
app.get(`/api/posts/`,con.getPosts)
app.get(`/api/post/:postId`,con.getSinglePost)
app.post(`/api/post`,con.sendPost)
app.post(`/api/auth/logout`,con.logout)
app.delete(`/api/post/remove/:postId`,con.deletePost)

app.listen(port, ()=>console.log(`listening on ${port}`))
