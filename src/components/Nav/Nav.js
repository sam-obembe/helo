import React from 'react'
import {connect} from 'react-redux'


const Nav=(props)=>{
  return(
    <div className = "nav">
      <img src = {`${props.profilepicture}`} alt = "profilepic"></img>
      <p>{props.username}</p>
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