const mongoose = require('mongoose');
const { Schema } = mongoose;

const songSchema = new Schema({
    name: String,
    album: String,
    duration: String,
    artist: String
});

const songModel = mongoose.model('song', songSchema);

const handelFindSong = async() => {
    let songJSON = await songModel.find({});
    return songJSON;
}

const createSong = async(song) => {
    let docSong = new songModel(song);
    await docSong.save();
};  

const authUpdateSong = async(filter, changes) => {
    let doc = { name: filter };
    await songModel.findOneAndUpdate(doc, { name: changes.name });
}; 

module.exports = {
    handelFindSong,
    createSong,
    authUpdateSong
};