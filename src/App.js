import './App.css';
import React, { Component } from 'react'
import { BrowserRouter ,Route,Switch} from 'react-router-dom';
import Searchbar from './componets/Searchbar';
import {Form } from "reactstrap"
import Profile from './componets/Profile';

export class App extends Component { 
  render() {
    return (
      <div>
      <div className="App">
     <BrowserRouter>
     <Switch>
     <Route path="/" component={Searchbar}></Route>
     </Switch>
     </BrowserRouter>
    </div>
      </div>
    )
  }
}
export default App;


