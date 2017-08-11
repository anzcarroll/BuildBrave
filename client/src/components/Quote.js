import React, { Component } from 'react';

class Quote extends Component {
    render() {
        return (
            <div>
                {this.props.value}
                {this.props.quote}
            </div>
        );
    }
}

export default Quote;