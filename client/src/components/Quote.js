import React, { Component } from 'react';
import { TopicStyle } from '../styles/board'

class Quote extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        }
    }
_toggleActive = () => {
 this.setState({active: !this.state.active})
}

    render() {
        if (this.state.active) {

        } return (
            <TopicStyle onClick={this._toggleActive}>
                {this.props.quote}
            </TopicStyle>
        );
    }
}

export default Quote;