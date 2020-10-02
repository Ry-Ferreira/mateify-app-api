const mongoose = require('mongoose');
const { Schema } = mongoose;

const songSchema = new Schema({
    name: String,
    album: String,
    duration: String,
    artist: String
});

const songModel = mongoose.model('song', songSchema);

const handleFindSong = async() => {
    let songJSON = await songModel.find({});
    return songJSON;
}

const createSong = async(song) => {
    let docSong = new songModel(song);
    await docSong.save();
};  

const authUpdateSong = async(filter, changes) => {
    let docId = { name: filter };
    await songModel.findOneAndUpdate(docId, { name: changes.name });
}; 

const handleDeleteSong = async(song) => {
    let id = { _id: song };
    await songModel.findOneAndDelete(id);
};

module.exports = {
    handleFindSong,
    createSong,
    authUpdateSong,
    handleDeleteSong,
    songModel: songModel
};