import React, { Component } from 'react';

class ClassTimer extends Component {
    interval = null;

    constructor(props) {
        super(props);

        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1}))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <p>{this.state.timer}</p>
                <button onClick={() => clearInterval(this.interval)}>Clear timer</button>
            </div>
        );
    }
}

export default ClassTimer;
