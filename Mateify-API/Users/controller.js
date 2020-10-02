const userModel = require('./model');

const findUsers = async() => {
    let allUsers = await userModel.handleFindUser();
    return allUsers;
};

const newUser = (user) => {
    userModel.createUser(user);
};

const modifiedUser = (name, changes) => {
    userModel.authUpdateUser(name, changes);
}; 

const removeUser = (user) => {
    userModel.handleDeleteUser(user);
};

module.exports = {
    findUsers,
    newUser,
    modifiedUser,
    removeUser
};