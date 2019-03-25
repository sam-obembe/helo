import React from 'react'
import * as RForm from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import axios from 'axios';

class Form extends React.Component{
  constructor(){
    super()
    this.state = {
      title: "",
      imgUrl: "",
      content: "",
      postSent: false,
    }
  }

  inputHandle = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  sendPost = ()=>{
    // const id = this.props.id
    const {title,imgUrl,content} = this.state
    axios.post(`/api/post`,{title,imgUrl,content}).then(res=>{
      alert(res.data)
      this.setState({postSent: true})
    })
  }


  render(){
    const redir = ()=>{
      if(this.state.postSent===true){
        return <Redirect to = "/dashboard"/>
      }
    }
    return(
      
      <div>
        {redir()}
        <div style = {{width: "50%"}}>
          
          <Jumbotron>
          <h1>Form</h1>
          <RForm>
            <RForm.Group>
              <RForm.Label>Title</RForm.Label>
              <RForm.Control as="input" name = "title" onChange = {(e)=>this.inputHandle(e)}/>
            </RForm.Group>

           
              <img src = {this.state.imgUrl} alt = "" style = {{width: "50%"}}/>
  
            <RForm.Group>
              <RForm.Label>Image Url</RForm.Label>
              <RForm.Control as = "input"  name = "imgUrl" onChange = {(e)=>this.inputHandle(e)}/>
            </RForm.Group>

            <RForm.Group>
              <RForm.Label>Content</RForm.Label>
              <RForm.Control as = "textarea" name = "content" onChange = {(e)=>this.inputHandle(e)}/>
            </RForm.Group>
            <Button variant = "outline-success" onClick = {()=>this.sendPost()}>Post</Button>
   
          </RForm>
          </Jumbotron>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    id: state.id
  }
}

export default connect(mapStateToProps)(Form)