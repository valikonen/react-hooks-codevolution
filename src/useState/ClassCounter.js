import React from 'react';

export default class ClassCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1});
    };

    render() {
    return (<button onClick={this.increment}> {this.state.counter} </button>)
    }
}