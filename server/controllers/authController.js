module.exports = {
  register: async (req,res)=>{
    const db = req.app.get('db')
    const {username,password} = req.body
    const newUser = await db.register_user(username,password).then(()=>db.get_user(username))
    res.status(200).send(newUser)
  },
  login: async(req,res)=>{
    const db = req.app.get('db')
    const {username,password} = req.body
    const user = await db.login_user(username,password)
    if(user.length>0){
      res.status(200).send(user)
    }else {
      res.status(401).send("unauthorized")
    }
    
  }
}