import React from 'react'
// import InputGroup from 'react-bootstrap/InputGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'

class PostEdit extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div style = {{width: "50%",height: "40%"}}>
      <Jumbotron>
        <Form>
            <Form.Group>
            
              <Form.Control type = "string"/>
            
            </Form.Group>
          
          </Form>

      </Jumbotron>
     
        
        
      </div>
    )
  }
}

export default PostEdit