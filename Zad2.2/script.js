var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        poster: './Harry.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        poster: './Krol_lew.jpg'
    },
    {
        id: 3,
        title: 'Gwiezdne wojny',
        desc: 'Film o rycerzach Jedi',
        poster: './Star_wars.jpeg'
    },
    {
        id: 4,
        title: 'Avengers',
        desc: 'Film o superbohaterach',
        poster: 'Avengers.jpg'
    }
];
var moviesElement = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.poster})
    );
});
var element = 
React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElement)
);
ReactDOM.render(element, document.getElementById('app'));
