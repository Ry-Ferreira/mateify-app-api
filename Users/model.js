const mongoose = require('mongoose');
const { Schema } = mongoose;
const songmodel = require('../Songs/model');

const userSchema = new Schema({
    name: String,
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
    await userModel.findOneAndUpdate(docId, {  name: changes.name, lastName: changes.lastName, email: changes.email, age: changes.age });
}; 

const handleDeleteUser = async(user) => {
    let id = { _id: user };
    await userModel.findOneAndDelete(id);
};


module.exports = {
    handleFindUser,
    createUser,
    authUpdateUser,
    handleDeleteUser
};