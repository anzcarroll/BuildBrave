import React, { Component } from 'react';
import Quote from './Quote'


class Topic extends Component {
    render() {
        return (
            <div>
                {this.props.topic.name}
                {this.props.topic.quotes.map((quote, i) => {
                    return <Quote key={i} value={quote.value} quote={quote.quote} />
                })}
            </div>
        );
    }
}

export default Topic;