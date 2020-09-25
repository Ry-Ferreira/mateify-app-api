const express = require('express');
const mongoose = require('mongoose');

const routeSongs = require('./Songs/route.js');
const routeUsers = require('./Users/route.js');

mongoose.connect('mongodb+srv://Ry-Ferreira_16:Bolsolapasion2.@forbootcampmatea.yum7p.mongodb.net/MateifyDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const server = express();
server.use(express.json());
server.listen(4000);
console.log('Server listen port 4000');

//Songs
server.get('/songs', routeSongs.getSongs);
server.get('/songs/:name', routeSongs.getSongById);

server.post('/songs', routeSongs.addSongs);

server.patch('/songs/:name', routeSongs.updateSong);
//Users
// server.get('/users', dbUsers.userRoute);
// server.post('/users', dbUsers.userRoute);



