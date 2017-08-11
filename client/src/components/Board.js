import React, { Component } from 'react';
import axios from 'axios';
import InspoBoard from './InspoBoard';

class Board extends Component {
    constructor() {
      super();
      this.state = {
        id: "",
        user: "",
        joyPoints: 0,
        topics: [],
        board: []
      }
    }


componentWillMount(){
const id = this.props.match.params.boardId;
axios.get(`/api/inspoBoard/${id}`).
then(res => {
    this.setState({
      id: res.data._id,
      user: res.data.user,
      joyPoints: res.data.joyPoints,
      topics: res.data.topics,
      board: res.data.board
    })
  })
}

  render() {
    return (
      <div>
        <h1>This is {this.state.user}'s Board of Inspiration</h1>
        <h3>each time you click a box</h3>
        <h3>we will add a little bit of JOY to your life: {this.state.joyPoints}</h3>
        <div> 
         <InspoBoard
          board={this.state.board} 
          topics={this.state.topics}
          />
          </div>
      </div>
    );
  }
}

export default Board;