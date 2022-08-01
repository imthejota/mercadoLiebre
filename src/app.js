const express = require('express');
const server = express();
const port = process.env.PORT || 3000;
const start = () => console.log('Starting server');
server.listen(port, start());

/*
GET -> el client le pide obtener información al server.
POST -> le sirve al client para mandarle info al server (cuando llenamos un form, cuando un usuario
    se lnodeoggea).
PUT -> te envío info pero esta info la vas a actualizar un dato o info que ya tengas almacenada.
PATCH (menos utilizado) -> te envío info pero esta info la vas a actualizar un dato o info 
que ya tengas almacenada, envía menos info que el PUT.
DELETE -> el client le pide al server que borre datos. Por ej, usuario cerró sesión, borrale el carrito.
*/

const path = require('path');
const public = path.join(__dirname, '../public');


// Método resolve, es una mejora de JOIN. Exactamente igual a Join modificándolo por resolve


const statics = express.static(public);

server.use(statics);


server.get('/', function(req, res) {
    let file = path.join(__dirname, 'views', 'home.html');
    res.sendFile(file);
})




server.get('/register', function(req, res) {
    let file = path.join(__dirname, 'views', 'register.html');
    res.sendFile(file);
})

server.post('/register', function(req, res) {
    res.redirect("/home")
})

server.get('/login', function(req, res) {
    let file = path.join(__dirname, 'views', 'login.html');
    res.sendFile(file);
})

/* server.get('/ping', function(req, res) {
    return res.send('Pong')
}) */
