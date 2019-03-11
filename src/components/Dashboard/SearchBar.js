import React from 'react'

const SearchBar = (props)=>{
  return(
    <div>
      <input type = "text" onChange = {(e)=>props.searchInput(e)}/>
      <button onClick = {()=>props.getPosts()}>Search</button>
      <button>Reset</button>
      <input type = "checkbox" id = "MyPosts" name = "userPosts" value ={true} onChange = {(e)=>props.postsToggle(e)}/>
      <label htmlFor = "MyPosts"> My Posts</label>
    </div>
  )
}

export default SearchBar