const express = require('express');
const songModel = require('./model');
const { model } = require('mongoose');

const findSongs = async() => {
    let allSongs = await songModel.handelFindSong();
    return allSongs;
}

const newSong = (song) => {
    songModel.createSong(song)
};

const modifiedSong = (changes) => {
    songModel.authUpdateSong(changes);
}; 

module.exports = {
    findSongs,
    newSong,
    modifiedSong
};