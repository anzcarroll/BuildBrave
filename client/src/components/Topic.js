import React, { Component } from 'react';
import Quote from './Quote';
import { TopicStyle, TileStyle } from '../styles/board'



class Topic extends Component {
    render() {
        return (
            <TopicStyle>
               <TileStyle> {this.props.topic.name} </TileStyle>
                {this.props.topic.quotes.map((quote, i) => {
                    return <Quote key={i} quote={quote} changePoints={this.props.changePoints}/>
                })}
            </TopicStyle>
        );
    }
}

export default Topic;