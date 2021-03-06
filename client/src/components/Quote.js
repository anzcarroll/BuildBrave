import React, { Component } from 'react';
// import { TopicStyle } from '../styles/board'
import styled  from 'styled-components';

const QuoteStyles = styled.div`
background: ${props => props.active ? "#e0d8ce" : "#9d99bc"};
color: #ffff5f;
border: 3px solid black;
height: 20vh;
width: 20vw;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
font-family:'BenchNine', sans-serif;;
font-size: 1.75rem;
`;



const ActiveQuote = (props) => (
    <QuoteStyles>
        <div>{props.quote.quote}</div>
        <input type="button" value="yes" onClick={(e) => props.changePoints(e, props.quote)}>
        </input>
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
        this.setState({ active: !this.state.active })
    }

    render() {
        if (this.state.active) {
            return <ActiveQuote submitted={this.state.submitted} changePoints={this.props.changePoints} quote={this.props.quote} />;
        } else {
            return <QuoteStyles submitted={this.state.submitted} onClick={this._toggleActive} ></QuoteStyles>;
        }
    }
}

export default Quote;