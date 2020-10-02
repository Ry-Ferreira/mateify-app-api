const controllerUsers = require('./controller');

const getUsers = async(req, res) => {
    try {
        let users = await controllerUsers.findUsers();
        res.status(200).send(users);
    } catch(e) {
        res.status(404).send(e + ' No hemos encontrado ningun usuario en la base de datos');
    }
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
            };
        } catch(e) {
            res.status(404).send(e + ' ...Y por eso no funcionó.');
        }
};

const addUsers = (req, res) => {
    let bodyUser = req.body;
    try {
        controllerUsers.newUser(bodyUser);
        res.status(201).send('User creado correctamente');
    } catch(e) {
        res.status(404).send('Fromato inválido o canción ya agregada.');
    }
};

const updateUser = async(req, res) => {
    let name = req.params.name;
    let changes = req.body;
    try {
        await controllerUsers.modifiedUser(name, changes);
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

module.exports = {
    getUsers,
    getUserByName,
    addUsers,
    updateUser,
    deleteUser
};