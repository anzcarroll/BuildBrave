import React, { Component } from 'react';
import axios from "axios";
import TopicInput from "./TopicInput";
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
div {
  display: flex;
  flex-direction: ;
  padding: 5px;
}
}
`

class CreateNewBoard extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      topics: [{
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
        }]
      },
      {
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
        }]
      },
      {
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
        }]
      },
      {
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
        }]
      },
      {
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
        }]
      }]
    }


  }

  _changeTopic = (e, index) => {
    const newState = { ...this.state };
    newState.topics[index].name = e.target.value
    this.setState(newState);
  }

  _changeQuotes = (e, index) => {
    console.log(e.target.name);
    const newState = { ...this.state };
    const findQuote = newState.topics[index].quotes.find((quote) => {
      return quote.value === parseInt(e.target.name)
    })
    findQuote.quote = e.target.value
    this.setState(newState);
  }

  _changeEventUser = e => {
    this.setState({ user: e.target.value });
  }


  _changeEvent = e => {
    const newState = { ...this.state };
    const pointValue = e.target.attributes.points.value;
    const typeValue = e.target.attributes.type.value;
    const changedTopic = newState.topic.find(v => {
      return v.value === parseInt(pointValue);
    });

    if (typeValue === "topic") {
      changedTopic.topic = e.target.value;
    } else if (typeValue === "quote") {
      changedTopic.quote = e.target.value;
    }


    this.setState(newState);
  };


  _createBoard = (state, e) => {
    e.preventDefault();
    axios.post("/api/board", this.state).then(res => {
      console.log(res.data);
    })
  };



  render() {
    return (
      <div>
        <FormStyle>
          <form onSubmit={this._createBoard}>
            <label htmlFor="user" >Create a username:</label>
            <input onChange={this._changeEventUser} type="text" name="user" />
            <hr />
            {this.state.topics.map((topic, i) => {
              return (
                <div>
                <TopicInput key={i} index={i} name={topic.name} quotes={topic.quotes}
                  _changeEvent={this._changeEvent} _changeTopic={this._changeTopic}
                  _changeQuotes={this._changeQuotes}
                />
                </div>
              );
            })}
            <button> SUBMIT CREATION</button>
          </form>
        </FormStyle>
      </div >
    );
  }
}

export default CreateNewBoard;