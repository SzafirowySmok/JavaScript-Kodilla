var express = require('express');
var app = express();

app.use('/store', function(req, res, next) {
    console.log('Hej jestem pośrednikiem przy żądaniu do /store');
    next();
});
app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie możemy znaleźć tego, czego żądasz');
});

app.listen(3000);