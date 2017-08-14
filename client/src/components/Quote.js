import React, { Component } from 'react';
// import { TopicStyle } from '../styles/board'
import styled from 'styled-components';

const QuoteStyles = styled.div`
background: ${props => props.clicked ? "#e0d8ce" : "#9d99bc"};
color: #ffff5f;
border: 3px solid black;
height: 150px;
width: 150px;

`;

const ActiveQuote = (props) => (
  <QuoteStyles submitted={props.clicked}>
    <div>{props.quote}</div>
    <form onSubmit={props.sumbitValue}>
      <button>Submit</button>
    </form>
  </QuoteStyles>
);

class Quote extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        }
    }
_toggleActive = () => {
 this.setState({active: !this.state.active})
}

    render() {
    if (this.state.active) {
        return <ActiveQuote submitted={this.state.submitted} quote={this.props.quote.quote}/>;
    } else {
      return <QuoteStyles submitted={this.state.submitted} onClick={this._toggleActive}>{this.props.quote.value}</QuoteStyles>;
    }
  }
}

export default Quote;