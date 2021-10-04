// import axios from 'axios';
// import React ,{useState,Component} from 'react'
// import "./App.css"

// export class SearchBar extends Component {
//     constructor(props){
//         super(props)
//         this.state={ 
//             username:" "
//         }
//     }
//     onchange=(e)=>{
//         console.log(e.target.value)
//         this.setState({username:e.target.value})
//     }

//     onsubmit=(e)=>{
//         e.preventDefault()
//         this.setState({username:e.target.value})
//         console.log(this.state)
       
//     }
//     render() {
//         return (
//             <div className="">
//             <input type="text" onChange={this.onchange} value={this.state.username} placeholder="search username" style={{"width":"200px"}}></input>
//             <button type="submit">search</button>
//             </div>
//         )
//     }
// }

// export default SearchBar;
