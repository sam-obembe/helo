import React from 'react'
import axios from 'axios'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import PostEdit from './PostEdit'
// import {withRouter} from 'react-router-dom'

class Post extends React.Component{
  constructor(){
    super()
    this.state = {
      title: "",
      img: "",
      content: "",
      username: "",
      profilepic: "",
      edit: false
    }
  }

  componentDidMount(){
    const{id} = this.props.match.params
    axios.get(`/api/post/${+id}`).then(res=>{
      const{title, img, content, username, profilepic} = res.data
      console.log(img)
      this.setState({title,img,content,username,profilepic}) 
    })
  }

  deletePost = ()=>{
    const{id} = this.props.match.params
    axios.delete(`/api/post/remove/${id}`).then(res=>alert(res.data)).catch(err=>console.log(err))
  }

  editPost = ()=>{
    console.log("hello")
    if(this.state.edit){
      this.setState({edit:false})
    }else{
      this.setState({edit:true})
    }
  }

  render(){
    const{title,img,content,username,profilepic} = this.state
    const toShow = ()=>{
      if(this.state.edit){
        return <PostEdit/>
      }
      else{
        return(
      
          <div style = {{width: "50%",height: "40%"}}>
            <Jumbotron>
              <h1>{title}</h1>
              <div>
                <p>{username} <span><img src = {profilepic} alt = "" style = {{width:"30px"}}/> </span></p>
              </div>
              <p>{content}</p>
              <Button variant = "outline-danger" onClick = {()=>this.deletePost()}>Delete</Button>
              <img src = {img} alt = "" style = {{width: "50%"}}/>
            </Jumbotron>
          </div>
          
        )
      }
    }
    return(
      <div>
        <div>
          {toShow()}
        </div>
        
        <Button variant = "outline-info" onClick = {()=>this.editPost()}>Edit Post</Button>
      </div>
    )
    
  }
}

export default Post