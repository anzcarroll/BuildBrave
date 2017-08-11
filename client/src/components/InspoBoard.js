import React, { Component } from 'react';
import Topic from './Topic'



class InspoBoard extends Component {
    
    render() {
        
        return (
            <div>
                 {this.props.topics.map((topic, i) => {
        return <Topic key={i} topic={topic} /> 
      })}
            </div>
            
        );
        
    }
}

export default InspoBoard;