import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink} from 'react-router-dom';
import './App.css';
import Home from './Home';
import History from './History';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <ul> 
          <li>
            <NavLink  
                exact to="/"
                style={{
                  color: 'black', 
                  textDecoration: 'none',
                  listStyle: 'none'}}
                exact activeStyle={{
                  fontWeight: "bold",
                  
                }}
               >HOME</NavLink>
          </li>
          
          
            
            <li>
              <NavLink
                 to="/notre-histoire"
                 style={{
                  color: 'Black', 
                  textDecoration: 'none',
                  listStyle: 'none'}}
                 exact activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                  textDecoration: 'none',
                }}
               
                 
                >HISTORY</NavLink>
            </li>
        </ul>
       
       
       
       
        <switch>     
          <Route exact path="/" component={Home}/> 
          <Route path="/notre-histoire" component={History}/> 
        </switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
