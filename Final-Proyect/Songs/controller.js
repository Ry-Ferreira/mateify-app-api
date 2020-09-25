const songModel = require('./model');

const findSongs = async() => {
    let newSong = await songModel.handelFindSong();
    console.log(newSong + 'desde controller');
    return newSong;
}

module.exports = {
    findSongs
};