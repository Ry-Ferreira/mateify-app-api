const userModel = require('./model');

const findUsers = async() => {
    let allUsers = await userModel.handleFindUser();
    return allUsers;
};

const newUser = async(user) => {
    let succes = await userModel.createUser(user);
    if(succes){
        return true;
    } else {
        return false;
    };
};

const modifiedUser = (name, changes) => {
    userModel.authUpdateUser(name, changes);
}; 

const removeUser = (user) => {
    userModel.handleDeleteUser(user);
};

const songFavList = async(nameUser, songFav) => {
    userModel.addSongFav(nameUser, songFav);
};

const deleteFavSong = (nameUser, songFav) => {
    userModel.deleteLikedSong(nameUser, songFav);
}

module.exports = {
    findUsers,
    newUser,
    modifiedUser,
    removeUser,
    songFavList,
    deleteFavSong
};