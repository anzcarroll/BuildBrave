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
}
`

class CreateNewBoard extends Component {
  constructor() {
    super();
    this.state = {
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
        }
        ]
      }]
      }
    
      
  }
  
  _changeTopic = e => {
    const newState = { ...this.state };
    newState.topics[0].name =  e.target.value 
    this.setState(newState);
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
    } else if( typeValue === "quote" ) {
      changedTopic.quote = e.target.value;
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
        <FormStyle onSubmit={this._createBoard}>
          {this.state.topics.map((topic, i) => {
            return (
              <TopicInput key={i} name={topic.name} quotes={topic.quotes} 
              _changeEvent={this._changeEvent} _changeTopic={this._changeTopic}
              />
            );
          })}
          <button> SUBMIT CREATION</button>
        </FormStyle>      
      </div >
    );
  }
}

export default CreateNewBoard;