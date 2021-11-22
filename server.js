// server.js
const express = require('express');
const app = express();
const server = require('http').Server(app);
app.get('/', function (req, res) {
    res.render('room');
})
app.set('view engine', 'ejs')

server.listen(3000);