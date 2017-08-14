import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      redirect: false,
      board: []
    }
  }

  componentWillMount(){
    axios.get('/api/inspoBoard').then(res => {
   
      this.setState({board: res.data});

    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>enter a username!</h1>
          <input type="text" name="username" />
          <button>Be Brave! Build Some Inspiration!</button>
        </div>
        {this.state.board.map((board, i) => (
          <div key={i}>
            <Link to={`/inspoBoard/${board._id}`}>
              {board.user}'s Inspirational Board!
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;