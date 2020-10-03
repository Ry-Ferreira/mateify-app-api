const express = require('express');
const mongoose = require('mongoose');

const routeSongs = require('./Songs/route.js');
const routeUsers = require('./Users/route.js');

mongoose.connect('mongodb+srv://Ry-Ferreira_16:Bolsolapasion2.@forbootcampmatea.yum7p.mongodb.net/MateifyDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const server = express();
server.use(express.json());
server.listen(process.env.PORT);
console.log('Server listen port');

//Songs
server.get('/songs', routeSongs.getSongs);
server.get('/songs/:name', routeSongs.getSongByName);

server.post('/songs', routeSongs.addSongs);

server.put('/songs/:name', routeSongs.updateSong);

server.delete('/songs/:name', routeSongs.deleteSong);


//Users

server.get('/users', routeUsers.getUsers);
server.get('/users/:name', routeUsers.getUserByName);

server.post('/users', routeUsers.addUsers);

server.put('/users/:name', routeUsers.updateUser);
server.put('/users/:name/:song', routeUsers.favSong);

server.delete('/users/:name', routeUsers.deleteUser);
server.delete('/users/:name/:song', routeUsers.deleteFav);
/*
RUTE OF SERVER: https://ry-mateify-api.herokuapp.com
*/

