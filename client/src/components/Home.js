import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResponseStyle = styled.div`
display: flex;
text-align: center;
.title-question: {
  position: relative;
  display: inline-block;
},
.question-content: {
  display: flex;
  flex-position: column;
  flex-wrap: wrap;
  position: center;
  width: 100px;  
  height: 100px; 
  margin: auto; 
  min-width: 160px;
},
.question-content a, Link {
  color: black;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  text-align: center;
}
h1, Link, a {
  font-family: 'BenchNine', sans-serif;
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
}
`

const ViewHomeStyle = styled.div`
text-align: center;
font-family: 'BenchNine', sans-serif;
font-weight: 700;
font-size: 2rem;
`


class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      board: []
    }
  }

  componentWillMount() {
    axios.get('/api/inspoBoard').then(res => {

      this.setState({ board: res.data });

    });
  }

  render() {
    return (
      <div>
        <div>
          <ResponseStyle className="title-question">
          <h1>do you want to inspire others?</h1>
          <hr/>
            <div className="question-content">
            <Link to="/new">Heck Yes, count me in!</Link>
            <br/>
              <a href ="http://www.enlightenmentforassholes.com/">ew, no</a>
            </div>
          </ResponseStyle>
        </div>
        <hr/>
        <ViewHomeStyle>
        <p>Some Days are harder than others! <br/>
        Seasons change, good books end, its Monday and <br/>
        your boss is still an asshole, <br/>
        Revolution was out of Orange Pistachio? <br/>
        Who knows! But when you click here you can <br/>
        get a chuckle or a smile. <br/>
        Only Rule is for you to promise to:<br/>
        shed no tears today + <br/>
        express your true brave self today</p>
        <h1>View Inpirational boards created by others:</h1>
        
        {this.state.board.map((board, i) => (
          <div key={i}>
            <Link to={`/inspoBoard/${board._id}`}>
              {board.user}'s Inspirational Board!
            </Link>
            <button>Delete</button>
          </div>
        ))}
        </ViewHomeStyle>
      </div>
    );
  }
}

export default Home;