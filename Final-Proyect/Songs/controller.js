const express = require('express');
const songModel = require('./model');

const findSongs = async() => {
    let allSongs = await songModel.handelFindSong();
    return allSongs;
}

const newSong = (song) => {
    songModel.createSong(song);
};

const modifiedSong = (name, changes) => {
    console.log(name, changes);
    songModel.authUpdateSong(name, changes);
}; 

module.exports = {
    findSongs,
    newSong,
    modifiedSong
};