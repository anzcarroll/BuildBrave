import React, { Component } from 'react';
import Quote from './Quote';
import { TopicStyle, TileStyle } from '../styles/board'



class Topic extends Component {
    render() {
        return (
            <TopicStyle>
               <TileStyle> {this.props.topic.name} </TileStyle>
                {this.props.topic.quotes.map((quote, i) => {
                    return <Quote key={i} value={quote.value} quote={quote.quote} />
                })}
            </TopicStyle>
        );
    }
}

export default Topic;