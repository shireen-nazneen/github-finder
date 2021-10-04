import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Button} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Searchbar() {
  const [inputvalue, setinputvalue] = useState("")

  const onchange=(e)=>{
    console.log(e.target.name.value)

    }

  const onsubmit=(e)=>{
    e.preventDefault()
    setinputvalue(e.target.name.value)
  }
  useEffect(() => {
    axios.get(`https://api.github.com/search/users?q=${inputvalue}`)
  }, [])
  return (
    <div className="p-1 border" style={{"width":"21rem","height":"15rem"}}> 
    <img className="p-1" src={"github.png"} style={{"width":"3rem","height":"3rem"}}></img>
    <div className=" border align-center  col" style={{"height":"9rem","width":"20rem"}}> 
    <from className="m-1" style={{"height":"10rem","width":"10rem"}} onSubmit={onsubmit}>
      <input className="m-1 rounded" name="name"  value={inputvalue} type="text" placeholder="username" onChange={onchange} ></input>
      <Button color="white">login</Button>
      {/* <button className="m-1 btn btn-light">search</button> */}
    </from>
  </div>
      
    </div>
    
  )
}
