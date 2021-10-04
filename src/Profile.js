import React, { Component } from 'react'

export class Profile extends Component {
    constructor(){
        super()
        this.state={
            post:[]
        }
        
    }
    componentDidMount(){
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
        return (
            <div></div>
        )
    }
}

export default Profile
