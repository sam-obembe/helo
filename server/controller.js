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
  },
  getPosts: async(req,res)=>{
    const db = req.app.get('db')
    const {userId} = req.params
    const {userPosts,search} = req.query
    const posts = await db.post_and_author(+userId)
    // if(userPosts&&search){

    // }else if (!userPosts && !search){
    //   await db.get_all_posts(userId)
    // }else if (!userPosts && search){
      
    // }
  }
}