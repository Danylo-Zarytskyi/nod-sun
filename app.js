const express = require('express');
const path = require('path');
const createError = require('http-errors');

const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname, 'public')));

server.get('/sun', (req, res) => {
    res.render('index');
})

server.use((req, res, next) => {
    next(createError(404));
});

server.use((err, req, res, next) => {
    const code = err.status || 500;

    res.status(code);
    res.end(`Error: ${code}`);
    console.error(err);  
});


server.listen(3000);