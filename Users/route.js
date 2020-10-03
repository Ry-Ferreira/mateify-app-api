const controllerUsers = require('./controller');

const getUsers = async(req, res) => {
    try {
        let users = await controllerUsers.findUsers();
        if (users.length == 0){
            res.status(200).send('No existen usuarios en la base de datos, create uno.');
        } else {
            res.status(200).send(users);
        };
    } catch(e) {
        res.status(404).send('Hemos encontrado un error: ' + ' ' + e);
    };
};

const getUserByName = async(req, res) => {
    let name = req.params.name;
    let userList = await controllerUsers.findUsers();
        try{
            let result = userList.filter((user) => {
                if(user.name == name){
                    return true;
                } else {
                    return false;
                }
            });
            if(result) {
                res.status(200).send(result);
            } else {
                res.status(404).send('No hemos encontrado un usuario con ese nombre.');
            };
        } catch(e) {
            res.status(404).send('Hemos encontrado un error: ' + ' ' + e);
        };
};

const addUsers = (req, res) => {
    let bodyUser = req.body;
    try {
        let user = controllerUsers.newUser(bodyUser);
        if(user) {
            res.status(201).send('Usuario creado correctamente');
        } else {
            res.status(404).send('Fromato inválido o usuario ya agregado.');
        }
    } catch(e) {
        res.status(404).send('Hubo un error: ' + ' ' + e);
    };
};

const updateUser = async(req, res) => {
    let name = req.params.name;
    let changes = req.body;
    try {
        controllerUsers.modifiedUser(name, changes);
        res.status(200).send('Usuario modificado correctamente.');
    } catch(e) {
        res.status(404).send('Hemos detectado un error: ' + e + '. Intenta cambiando el nombre del usuario.');
    }
};

const deleteUser = async(req, res) => {
    let user = req.params.name;
    try {
        controllerUsers.removeUser(user);
        res.status(404).send('Usuario eliminado correctamente.');
    } catch(e) {
        res.status(404).send('Hemos encontrado un error: ' + e + '. Intenta cambiando el nombre del usuario.');
    }
};

const favSong = (req, res) => {
    let nameUser = req.params.name;
    let songFav = req.params.song;
    try {
        controllerUsers.songFavList(nameUser, songFav);
        res.status(200).send('Canción agregada a favoritos.');
    } catch(e) {
        res.status(404).send('Hemos encontrado un error: ' + ' ' + e);
    };
};

const deleteFav = (req, res) => {
    let nameUser = req.params.name;
    let songFav = req.params.song;
    try {
        controllerUsers.deleteFavSong(nameUser, songFav);
        res.satus(200).send('Canción retirada de favoritos.');
    } catch(e) {
        res.status(404).send('Hemos detectado un error: ' + ' ' + e);
    }
};

module.exports = {
    getUsers,
    getUserByName,
    addUsers,
    updateUser,
    deleteUser,
    favSong,
    deleteFav
};