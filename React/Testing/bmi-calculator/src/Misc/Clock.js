import React, { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
        this.timeId = null;
    }

    componentDidMount() {
        this.timeId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    tick() {
        this.setState({
            date: new Date()
        })

    }

    render() {
        return(
            <h2>Time is: {this.state.date.toLocaleTimeString()}</h2>
        )
    }

}
