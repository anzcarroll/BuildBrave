import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Board from "./components/Board";
import AddTopic from "./components/AddTopic";
import NavBar  from './styles/navBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar>
            <h1>BuildBrave</h1>
            <Link to="/">Home</Link>
            <Link to="/add-topic">Add a Topic</Link>
            <a href="#">Login</a>
          </NavBar>
          <div>
            <Route exact path="/" component={Home} /> 
            <Route path="/inspoBoard/:boardId" component={Board} /> 
            <Route path="/add-topic" component={AddTopic} /> 
          </div>
        </div>
      </Router>
    );
  }
}

export default App;