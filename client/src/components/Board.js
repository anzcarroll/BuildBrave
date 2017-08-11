import React, { Component } from 'react';

class Board extends Component {
  render() {
    return (
      <div>
        Hello From InspoBoard
        {this.props.match.params.inspoBoardId}
      </div>
    );
  }
}

export default Board;