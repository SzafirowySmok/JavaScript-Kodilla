var Counter = React.createClass({
    getDefaultProps: function() {
        return console.log('ustawiam jakieś właściwości props');
    },
    getInitialState: function() {
        return {
            counterPlus: 0,
            counterMinus: 0,
            counterMinusA: 10
        };
    },
    increment: function() {
        this.setState({
            counterPlus: this.state.counterPlus + 1
        });
    },
    decrement: function() {
        this.setState({
            counterMinus: this.state.counterMinus - 1,
        });
    },
    decrement2: function() {
        this.setState({
            counterMinusA: this.state.counterMinusA - 2,
        });
    },
    componentWillMount: function() {
        return console.log('nie mam pojecia co tu zrobić')
    },
    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, 'Dodawanie: Licznik ' + this.state.counterPlus),
            React.createElement('button', {onClick: this.decrement}, 'Odejmowanie: Licznik ' + this.state.counterMinus),
            React.createElement('button', {onClick: this.decrement2}, 'Odejmowanie2: Licznik ' + this.state.counterMinusA)
        );
    },
    componentDidMount: function() {
        return console.log('dodanie zdjęcia na stronie');
    },
    componentWillReceiveProps: function() {
        return console.log('aktualizacja stanu po dodaniu nowych właściwości');
    },
    shouldComponentUpdate: function() {
        return true;
    },
    componentWillUpdate: function() {
        return console.log('przygotowanie do nadchodzących zmian');
    },
    componentDidUpdate: function() {
        return console.log('dodanie podpisu do zdjęcia');
    },
    componentWillUnmount: function() {
        return console.log('skasowanie wszystkich zdjęć');
    },
});
var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));