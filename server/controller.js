module.exports = {
  register: async (req,res)=>{
    const db = req.app.get('db')
    const {username,password} = req.body
    const newUser = await db.register_user(username,password).then(()=>db.get_user(username))
    req.session.userId = newUser[0].id
    res.status(200).send(newUser)
  },
  login: async(req,res)=>{
    const db = req.app.get('db')
    const {username,password} = req.body
    const user = await db.login_user(username,password)
    if(user.length>0){
      req.session.userId = user[0].id
      res.status(200).send(user)
    }else {
      res.status(401).send("unauthorized")
    }  
  },
  getPosts: async(req,res)=>{
    const db = req.app.get('db')
    const {userId} = req.session
    const {userPosts,search} = req.query
    const postsToGet = async()=>{
      let ans
      if(userPosts === "true" && search.length===0){
        ans = await db.post_and_author(userId)
      }  
      else if(userPosts==="false" && search.length ===0){
        ans = await db.get_all_posts()
      }
      else if( userPosts === "true" && search.length>0){
        ans = await db.post_author_search(userId,`%${search}%`)
      }
      else if(userPosts === "false" && search.length>0){
        ans = await db.all_posts_search(`%${search}%`)
    
      }
      return ans

    }
    let posts = await postsToGet()
    res.status(200).json(posts)
  },

  getSinglePost: async(req,res)=>{
    const db = req.app.get('db')
    const {postId} = req.params
    const post = await db.get_single_post(postId)
    res.status(200).send(post[0])
  },

  sendPost: async(req,res)=>{
    const db = req.app.get('db')
    const {userId} = req.session
    const {title,imgUrl,content} = req.body
    await db.write_post(title,imgUrl,content,+userId)
    res.status(200).send("post sent")
  },

  deletePost: async(req,res)=>{
    
    const db = req.app.get('db')
    const {postId} = req.params
    console.log(postId)
    await db.delete_post(+postId)
    res.status(200).send("deleted")
  },

  logout: async(req,res)=>{
    await req.session.destroy()
    console.log(req.session)
    res.status(200).send("logged out")
  }
}

