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

            <FormStyle onSubmit={this.props_createBoard}>
                <label htmlFor="topic" >Topic: </label>
                <input onChange={(e) => this.props._changeTopic(e, this.props.index)}
                    type="text" value={this.props.name}
                    placeholder="what do you struggle with?"
                />
                <br />
                {this.props.quotes.map((quote, i) => {
                    return (
                        <QuoteInput key={i} quote={quote} index={this.props.index}
                            _changeEvent={this.props._changeEvent}
                            _changeQuotes={this.props._changeQuotes}
                        />

                    );
                })}

            </FormStyle>
        );
    }
}

export default TopicInput;
