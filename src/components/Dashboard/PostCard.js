import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const PostCard = (props)=>{
  return(
    <div style = {{width: "50%", marginBottom: "10px"}}>
    <Card>
      <Card.Body>
        <h4>{props.title}</h4>
        <Link to = {`/post/${props.id}`}><Button variant = "outline-dark">See Post</Button></Link>
      </Card.Body> 
    </Card>
    </div>
  
  )
}

export default PostCard