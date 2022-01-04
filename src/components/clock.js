import React from "react";

export class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        console.log('STATEEEE', this.state.date)
        this.timer = null;
    }

    componentDidMount() {
        this.timer = window.setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return <div>Time : {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}</div>
    }
}
