var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');


app.get('/index', function (req, res) {
    res.render('index')
});

app.get('/auth/google', function (req, res) {
    res.render('logged', {
        user: "Anna"
    })
});


app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie możemy znaleźć tego, czego żądasz');
});

app.listen(3000);
