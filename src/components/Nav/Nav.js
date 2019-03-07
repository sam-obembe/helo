import React from 'react'
import {connect} from 'react-redux'


const Nav=(props)=>{
  return(
    <div>
      <p>{props.username}</p>
    </div>
  )  
}

function mapStateToProps(state){
  return{
    username: state.username,
    profilepicture: state.profilepicture
  }
}

export default connect(mapStateToProps)(Nav)