import React, { Component } from 'react';
// import { TopicStyle } from '../styles/board'
import styled  from 'styled-components';

const QuoteStyles = styled.div`
background: ${props => props.clicked ? "#e0d8ce" : "#9d99bc"};
color: #ffff5f;
border: 3px solid black;
height: 153px;
width: 170px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

const ActiveQuote = (props) => (
    <QuoteStyles>
        <div>{props.quote}</div>
        <input type="button" value="yes" onClick={props._changePoints}>
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
            return <ActiveQuote submitted={this.state.submitted} quote={this.props.quote} />;
        } else {
            return <QuoteStyles submitted={this.state.submitted} onClick={this._toggleActive}>{this.props.quote.value}</QuoteStyles>;
        }
    }
}

export default Quote;