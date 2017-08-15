import React, { Component } from 'react';
import axios from 'axios';
import InspoBoard from './InspoBoard';
import styled from 'styled-components';

const userBoardStyle = styled.div`
display: flex;
justify-content: center;

`;


class  Board extends Component {
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

  componentWillMount() {
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

  _changePoints = (e, quote, id) => {
    e.preventDefault();
    const quoteClicked = e.target.type;
    console.log( quoteClicked)
    const newState = { ...this.state }
    if (quoteClicked === 'button') {
      console.log(quote.value);
      newState.joyPoints += quote.value
    }
    newState.board[id] = true;
    this.setState(newState);
    console.log(newState)
    axios.put('/api/inspoBoard/' + this.state.id, newState)
      .then((res) => {
        console.log("Successful update");
      });
  }




  render() {
    return (
      <div>
        <h1>Inspo Board made for YOU</h1>
        <h2> by {this.state.user}</h2>
        <h3>each time you say YES, a little bit of JOY is added to your heart:</h3>
        <h3>{this.state.joyPoints}</h3>
        <div>
          <InspoBoard
            changePoints={this._changePoints}
            board={this.state.board}
            topics={this.state.topics}
          />
        </div>
      </div>
    );
  }
}

export default Board;