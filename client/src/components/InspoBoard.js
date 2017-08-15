import React, { Component } from 'react';
import Topic from './Topic'
import { BoardStyles } from '../styles/board'
class InspoBoard extends Component {

    render() {

        return (
            <BoardStyles>
                {this.props.topics.map((topic, i) => {
                    return <Topic key={i} topic={topic} changePoints={this.props.changePoints} />
                })}
            </BoardStyles>
        );
    }
}

export default InspoBoard;