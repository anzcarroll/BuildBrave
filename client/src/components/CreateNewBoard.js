import React, { Component } from 'react';
import axios from "axios";
import QuoteInput from "./QuoteInput";
import styled from 'styled-components';




class CreateNewBoard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      quotes: [{
        value: 24,
        quote: '',
      },
      {
        value: 11,
        quote: '',
      },
      {
        value: 20,
        quote: '',
      },
      {
        value: 30,
        quote: '',
      },
      {
        value: 10,
        quote: '',
      }
      ]
    }
  }
  _changeTopic = e => {
    this.setState({ name: e.target.value });
  }
  _changeEvent = e => {
    const newState = { ...this.state };
    const pointValue = e.target.attributes.points.value;
    const typeValue = e.target.attributes.type.value;
    const changedQuote = newState.quotes.find(v => {
      return v.value === parseInt(pointValue);
    });

    if (typeValue === "quote") {
      changedQuote.quote = e.target.value;
    } 

    this.setState(newState);
  };


  _createBoard = (props, e) => {
    e.preventDefault();
    axios.post("/api/new", this.state).then(res => {
      console.log(res.data);
    })
  };

  

  render() {
    return (
      <div>
        <formStyle onSubmit={this._createBoard}>
          <label htmlFor="topic">Topic: </label>
          <input onChange={this._changeTopic} type="text" value={this.state.topic} />
          <br />
          {this.state.quotes.map((q, i) => {
            return (
              <QuoteInput key={i} quote={q} _changeEvent={this._changeEvent}
              />
            );
          })}
          <button> SUBMIT CREATION</button>
        </formStyle>      
      </div >
    );
  }
}

export default CreateNewBoard;