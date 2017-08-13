import React, { Component } from 'react';


class AddTopic extends Component {
    constructor() {
      super();
      this.state =  {
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
// _createNewBoard = (props, e) => {
// e.preventDefault();
// this.setState({name: e.target.value})
// }

  render() {
    return (
      <div>
        <form>
          CREATE A CATEGORY
          <button> SUBMIT </button>
        </form>      
      </div>
    );
  }
}

export default AddTopic;