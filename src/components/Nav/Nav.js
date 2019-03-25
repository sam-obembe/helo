import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
// import {Redirect} from 'react-router-dom'
import axios from 'axios'

const logout = ()=>{
  axios.post("/api/auth/logout").then(res=>{
    alert(res.data)
    window.location.href = "/"
  })
}

const Nav=(props)=>{
  return(
    <div className = "nav">
      <img src = {`${props.profilepicture}`} alt = "profilepic"></img>
      <p>{props.username}</p>
      <div>
       <Link to = "/dashboard"> <i className="fas fa-home"></i></Link>
      </div>

      <div>
        <Link to = "/new" ><i className="fas fa-pen-fancy"></i></Link>
      </div>
      <div>
        <Button onClick = {()=>logout()}>Logout</Button>
      </div>
    </div>
  )  
}

function mapStateToProps(state){
  return{
    username: state.username,
    profilepic: state.profilepic
  }
}

export default connect(mapStateToProps)(Nav)