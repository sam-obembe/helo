import React from 'react'
import Nav from '../Nav/Nav'
import SearchBar from './SearchBar'
import {connect} from 'react-redux'
import '../../styles/Dashboard.css'
import PostCard from './PostCard'
import axios from 'axios';

class Dashboard extends React.Component{
  constructor(){
    super()
    this.state = {
      searchString: "",
      userPosts: false,
      posts : []
    }
  }

  componentDidMount(){ this.getPosts() }

  userPostsToggle = (e)=>{
    let newVal = (e.target.value === "true")
    this.state.userPosts? this.setState({userPosts: false}): this.setState({userPosts: newVal})
  }

  getPosts = ()=>{
    axios.get(`/api/posts/?userPosts=${this.state.userPosts}&search=${this.state.searchString}`).then(res=> {
      this.setState({posts:res.data})
    })
  }

  searchHandle = (e)=>{
    this.setState({searchString: e.target.value})
  }

  render(){
    const postCards = ()=>{
      if(this.state.posts.length ===0){
        return <h1>Loading</h1>
      }else{
        return this.state.posts.map((post)=>{
          return <PostCard title = {post.title} key = {post.id} id = {post.id}/>
        })
      }
    }
    
    return(
      <div className = "dashboardHome">
        <div>
          <Nav/>
        </div>
       
        <div className = "dash">
          <h1>Dashboard</h1>
          <SearchBar postsToggle = {this.userPostsToggle} getPosts = {this.getPosts} searchInput = {this.searchHandle}/>
          <div className = "postCards">
            {postCards()}
          </div>
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