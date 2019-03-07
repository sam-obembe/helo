import React from 'react'
import Nav from '../Nav/Nav'
import axios from 'axios'
import '../../styles/auth.css'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUserInfo} from '../../ducks/reducer'
// import Dashboard from '../Dashboard/Dashboard'

class Auth extends React.Component{
  constructor(){
    super()
    this.state = {
      username : "",
      password: "",
      authenticated: false
    }
  }

  registerSubmit = async()=>{
    await axios.post("/api/auth/register",this.state).then(res=>{
      // console.log(res.data)
      this.setState({authenticated:true})
    }
    )
  }

  loginSubmit = async()=>{
    await axios.post("/api/auth/login",this.state).then(res=>{
      const {username,password,profile_pic} = res.data
      this.props.updateUserInfo(username,password,profile_pic)
      this.setState({authenticated:true})
    })
  }
  
  inputHandle = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  render(){
    if(this.state.authenticated){
      return <Redirect to = "/dashboard"/>
    } else{
      return(
        <div className = "view">
          <Nav/>
          <div className = "loginRegister">
  
            <h1>Helo</h1>
            <p>Username:  <span> <input type = "text" placeholder = "username" name = "username" onChange = {(e)=>this.inputHandle(e)}/> </span></p>
            <p>Password: <span> <input type = "password" placeholder = "password" name = "password"onChange = {(e)=>this.inputHandle(e)}/> </span></p>
  
            <div>
              <button onClick = {()=>this.loginSubmit()}>Login</button>
              <button onClick = {()=>this.registerSubmit()}>Register</button>
            </div>
            
          </div>
        </div>
      )
    }
    
  }
}

export default connect(null,{updateUserInfo})(Auth)