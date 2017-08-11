import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Board from "./components/Board";
import AddTopic from "./components/AddTopic";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/add-topic">Topic:</Link>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/board/:boardId" component={Board} />
            <Route path="/add-topic" component={AddTopic} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;