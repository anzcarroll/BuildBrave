import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      user: "",
      redirect: false,
      board: []
    }
  }

  componentWillMount(){
    axios.get('/api/inspo').then(res => {
      console.log(res.data);
      this.setState({board: res.data})
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>enter a username!</h1>
          <input type="text" name="username" />
          <button>New Game</button>
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