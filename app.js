const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, './public')));

app.listen (3000, () => console.log('Servidor corriendo en puerto 3000'));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname,'./views/home.html')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname,'./views/register.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname,'./views/login.html')));
app.post('/', (req, res) => res.sendFile(path.resolve(__dirname,'./views/home.html')));