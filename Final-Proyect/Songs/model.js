const mongoose = require('mongoose');
const { Schema } = mongoose;

const songSchema = new Schema({
    name: String,
    album: String,
    duration: String,
    artist: String
});

const model = mongoose.model('Song', songSchema, 'Songs');

const handelFindSong = async() => {
    let songJSON = await model.find({});
    console.log(songJSON + 'desde model');
    return songJSON;
}


module.exports = {
    handelFindSong
}