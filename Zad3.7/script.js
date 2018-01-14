function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}
class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.running = false,
        this.state = {
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        };
    }
    reset() {
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        });
    }
    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }
    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }
    step() {
        if (!this.running) return;
        this.calculate();
        
    }
    calculate() {
        this.state.times.miliseconds += 1;
        if (this.state.times.miliseconds >= 100) {
            this.state.times.seconds += 1;
            this.state.times.miliseconds = 0;
        }
        if (this.state.times.seconds >= 60) {
            this.state.times.minutes += 1;
            this.state.times.seconds = 0;
        }
        this.setState({
            times: {
                minutes: this.state.times.minutes,
                seconds: this.state.times.seconds,
                miliseconds: this.state.times.miliseconds
            }
        });
    }
    stop() {
        this.running = false;
        clearInterval(this.watch);
    }
    resetWatch() {
        this.reset();
        
    }
    render () {
        return (
        <div className="stopwatch">
            <nav className="controls">
                <a className="button" onClick={this.start.bind(this)}>Start</a>
                <a className="button" onClick={this.stop.bind(this)}>Stop</a>
                <a className="button" onClick={this.reset.bind(this)}>Reset</a>
            </nav>
            <div className="stoper">{this.format(this.state.times)}</div>
        </div>);
    }
}
ReactDOM.render(<Stopwatch />, document.getElementById('app'));

