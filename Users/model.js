const mongoose = require('mongoose');
const { Schema } = mongoose;
const songmodel = require('../Songs/model');

const userSchema = new Schema({
    name: { type: String, required: true },
    lastName: String,
    email: String,
    age: Number,
    likedSongs: [{ type: Schema.Types.ObjectId, ref:'song' }]
});

const userModel = mongoose.model('User', userSchema);

const handleFindUser = async() => {
    let userJSON = await userModel.find({}).populate('likedSongs');
    return userJSON;
};

const createUser = async(user) => {
    let docUser = new userModel(user);
    await docUser.save();
};  

const authUpdateUser = async(filter, changes) => {
    let docId = { name: filter };
        if(changes.name != null) {
            userModel.updateOne(docId, { name: changes.name });
        };
    await userModel.findOneAndUpdate(docId, {  name: changes.name, lastName: changes.lastName, email: changes.email, age: changes.age, likedSongs: changes.likedSongs });
}; 

const handleDeleteUser = async(user) => {
    let id = { _id: user };
    await userModel.findOneAndDelete(id);
};

const handleFindOneUser = async(nameUser) => {
    let result = await userModel.findOne({ name: nameUser});
    return result;
};

const handleFindOneSong = async(nameSong) => {
    let result = await songmodel.song.findOne({ name: nameSong });
    return result;
};

const addSongFav = async(user, song) => {
    let succesUser = await handleFindOneUser(user);
    let succesSong = await handleFindOneSong(song);
    await userModel.findByIdAndUpdate({ _id: succesUser.id }, { $addToSet: { likedSongs: succesSong.id }});
};

const deleteLikedSong = async(user, song) => {
    let succesUser = await handleFindOneUser(user);
    let succesSong = await handleFindOneSong(song);
    await userModel.findByIdAndUpdate({ _id: succesUser.id }, { $pull: { likedSongs: succesSong.id }});
};

module.exports = {
    handleFindUser,
    createUser,
    authUpdateUser,
    handleDeleteUser,
    handleFindOneUser,
    handleFindOneSong,
    addSongFav,
    deleteLikedSong
};