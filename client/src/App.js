import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Board from "./components/Board";
import CreateNewBoard from "./components/CreateNewBoard";
import NavBar  from './styles/navBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar>
            <h1>BuildBrave</h1>
            <Link to="/">Home</Link>
            
            <a href="#">Login</a>
          </NavBar>
          <div>
            <Route exact path="/" component={Home} /> 
            <Route path="/inspoBoard/:boardId" component={Board} /> 
            <Route path="/new" component={CreateNewBoard} /> 
          </div>
        </div>
      </Router>
    );
  }
}

export default App;