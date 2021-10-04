import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import { withRouter } from 'react-router'
export class Repo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.user,
      posts: this.props.posts2
    }
  }
  render() {
    return (
     <div>
       <h1>{this.state.posts2.login}</h1>
    </div>
    )
  }
}

export default Repo;
