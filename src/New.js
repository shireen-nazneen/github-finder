import React, { Component } from 'react'
import axios from 'axios'
import "./App.css"
import Repo from './Repo'
import { BrowserRouter ,Route} from 'react-router-dom';
export class Working extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      username: "",
      posts2:[]
      

    }
    console.log(this.state.posts, "im state")
  }
  disabled = true
  onchange = (e) => {
    console.log(e.target.value)
    this.setState({ username: e.target.value })
    this.disabled = false
  }
  onsubmit = (e) => {
    e.preventDefault()
    const valu = this.state.username
    axios.get(`https://api.github.com/search/users?q=${valu}`)
      .then((response => {
        console.log(response.data.items.login)
        this.setState({ posts: response.data.items })
      }))
      .catch(error => {
        console.log(error)
      })

  }
  profile=()=>{
    const valu = this.state.username
    axios.get(`https://api.github.com/users/${valu}/repos`)
    .then((response => {
      console.log(response.data)
      this.setState({ posts2: response.data})
    }))
    .catch(error => {
      console.log(error)
    })
  }
  render() {
    const { posts } = this.state
    const {posts2}=this.state
    console.log(this.state.posts2.login,"________")
    // console.log(this.state.posts2.map((a)=>a.owner.login))
    return (
      <div>
        {<>
          <div className="">
            <span></span>
            <from className="" >
              <h1 className="title-pen"> Searched Profile</h1>
              <center><input type="text" className="input" onChange={this.onchange} placeholder="search username" style={{ "width": "300px", "margin": "3px" }}></input>
                <button className="serach" type="submit" onClick={(e) => this.onsubmit(e)} disabled={this.disabled} style={{ "height": "35px", }}>search</button>
              </center>
            </from>
          </div>
          <div>
            {posts.length ? posts.map(post =>
              <div className="user-profile shadow p-2 mb-5 bg-white rounded" key={post.id} id={post.id} style={{"width":"200px","height":"200px"}} >
                <img className="avatar p-1" src={post.avatar_url} alt="Ash" style={{ "border-radius": "2rem" ,"width":"4rem","height":"4rem"}} />
                <div className="username">{post.login}</div>
                <button onClick={() => this.profile(this.state.username)}>profile</button>
              </div>
            ) : null}
          </div>
        </>
        }
        <div>{posts2.login}</div>
      </div>
    )
  }
}
export default Working;
