var MoviesList = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },
    render: function() {
        var movies = this.props.items.map(function(movie) {
            return React.createElement(Movie, {item: movie, key:movie.id})
        });
        return (
            React.createElement('ul', {}, movies)
        );
    }
});

var Movie = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {movieTitle: this.props.item.title}),
                React.createElement(MovieDescription, {movieDesc: this.props.item.desc}),
                React.createElement('img', {src: this.props.item.poster})
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        movieTitle: React.PropTypes.string
    },
    render: function() {
        return (
            React.createElement('h2', {}, this.props.movieTitle)
        )
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        movieDesc: React.PropTypes.string
    },
    render: function() {
        return (
            React.createElement('p',{}, this.props.movieDesc)
        )
    }
});

var movieElements = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        poster: './images/Harry.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        poster: './images/Krol_lew.jpg'
    },
    {
        id: 3,
        title: 'Gwiezdne wojny',
        desc: 'Film o rycerzach Jedi',
        poster: './images/Star_wars.jpeg'
    },
    {
        id: 4,
        title: 'Avengers',
        desc: 'Film o superbohaterach',
        poster: './images/Avengers.jpg'
    }
]

var element = React.createElement(MoviesList, {items: movieElements});
ReactDOM.render(element, document.getElementById('app'));