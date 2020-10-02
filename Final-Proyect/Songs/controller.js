const express = require('express');
const songModel = require('./model');

const findSongs = async() => {
    let allSongs = await songModel.handleFindSong();
    return allSongs;
};

const newSong = (song) => {
    songModel.createSong(song);
};

const modifiedSong = (name, changes) => {
    songModel.authUpdateSong(name, changes);
}; 

const removeSong = (song) => {
    songModel.handleDeleteSong(song);
};

module.exports = {
    findSongs,
    newSong,
    modifiedSong,
    removeSong
};