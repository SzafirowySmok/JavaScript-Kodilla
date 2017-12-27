var fs = require('fs');

fs.readdir('../zad1.7', 'utf-8', function(err, files) {
    fs.writeFile('./tekst.txt',files, function(err) {
        if (err) throw err;
    });
    fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
        console.log(data);
    });
});

