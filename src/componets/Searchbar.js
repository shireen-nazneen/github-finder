import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Button,Input,Form,Alert,Card,CardTitle,CardBody,CardSubtitle,CardImg,CardText} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Searchbar() {
  // input  value for user input 
  const [inputvalue, setInputvalue] = useState("")
  // 
  const [Data, setData] = useState([])
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  // onChange method for input
  const onchange=(e)=>{
    console.log(e.target.value);
    setInputvalue(e.target.name.value)
    }


  // onSybmit method  for u form
  const onsubmit=(e)=>{
    e.preventDefault()
    const valu=inputvalue
    setInputvalue(e.target.name.value)
    axios.get(`https://api.github.com/search/users?q=${valu}`)
    .then((r)=>{
      setData(r.data)
      }).catch(er=>
      console.log(er)
    )}
  console.log(Data)
  return (
    <div> 
    <img className="p-1" src={"github.png"} style={{"width":"3rem","height":"3rem"}}></img>
    <Form onSubmit={onsubmit}>
    <h1>github</h1>
    <Input type="username" id="id" placeholder="username" onChange={onchange} value={inputvalue} name="name"></Input>
      <Button  className="m-2" color="white">login</Button>
        <Alert color="info" isOpen={visible} toggle={onDismiss}>
      I am an alert and I can be dismissed!
      </Alert>
     </Form>
    <div>
    <Card>
        <CardImg top src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>a to z</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  </div>    
  )






}
