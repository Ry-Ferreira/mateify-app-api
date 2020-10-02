const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    lastName: String,
    email: String,
    age: Number
});

const userModel = mongoose.model('user', userSchema);

const handleFindUser = async() => {
    let userJSON = await userModel.find({});
    return userJSON;
};

const createUser = async(user) => {
    let docUser = new userModel(user);
    await docUser.save();
};  

const authUpdateUser = async(filter, changes) => {
    let docId = { name: filter };
    await userModel.findOneAndUpdate(docId, { name: changes.name });
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