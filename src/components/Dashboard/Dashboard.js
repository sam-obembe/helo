import React from 'react'
import Nav from '../Nav/Nav'
import SearchBar from './SearchBar'
import {connect} from 'react-redux'
import '../../styles/Dashboard.css'
import axios from 'axios';

class Dashboard extends React.Component{
  constructor(){
    super()
    this.state = {
      searchString: "",
      userPosts: false,
    }
  }

  userPostsToggle = (e)=>{
    let newVal = (e.target.value === "true")
    this.state.userPosts? this.setState({userPosts: false}): this.setState({userPosts: newVal})
  }

  getPosts = ()=>{
    axios.get(`/api/posts/${this.props.id}?userPosts=${this.state.userPosts}&search=${this.state.searchString}`)
  }

  searchHandle = (e)=>{
    this.setState({searchString: e.target.value})
  }


  render(){
    return(
      <div className = "dashboardHome">
        <Nav/>
        <div className = "dash">
          <h1>Dashboard</h1>
          <SearchBar postsToggle = {this.userPostsToggle} getPosts = {this.getPosts} searchInput = {this.searchHandle}/>
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

export default connect(mapStateToProps)(Dashboard)