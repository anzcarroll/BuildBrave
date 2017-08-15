import React, { Component } from 'react';
import QuoteInput from './QuoteInput';
import styled from 'styled-components';


export const FormStyle = styled.div`
font-family:'BenchNine', sans-serif;
font-size:2rem;
input {
  height:
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

input:focus {
  width: 40%;
}
}
`

class TopicInput extends Component {
    render() {
        return (

            <FormStyle onSubmit={this._createBoard}>
                <label htmlFor="topic" >Topic: </label>
                <input onChange={this.props.changeTopic} type="text" value={this.props.name} placeholder="what do you struggle with?" />
                <br />
                {this.props.quotes.map((quote, i) => {
                    return (
                        <QuoteInput key={i} quote={quote}
                            _changeEvent={this.props.changeEvent}
                        />

                    );
                })}

            </FormStyle>
        );
    }
}

export default TopicInput;
