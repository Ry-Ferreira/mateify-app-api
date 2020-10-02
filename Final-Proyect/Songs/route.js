const controllerSong = require('./controller');

const getSongs = async(req, res) => {
    try {
        let songs = await controllerSong.findSongs();
        res.status(200).send(songs);
    } catch(e) {
        res.status(404).send(e + ' No hemos encontrado ninguna canción en la base de datos');
    }
};

const getSongByName = async(req, res) => {
    let name = req.params.name;
    let songList = await controllerSong.findSongs();
        try{
            let result = songList.filter((song) => {
                if(song.name == name){
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

const addSongs = async(req, res) => {
    let bodySong = req.body;
    try {
        controllerSong.newSong(bodySong);
        res.status(201).send('Canción agregada correctamente');
    } catch(e) {
        res.status(404).send('Fromato inválido o canción ya agregada.');
    }
};

const updateSong = async(req, res) => {
    let name = req.params.name;
    let changes = req.body;
    try {
        await controllerSong.modifiedSong(name, changes);
        res.status(200).send('Canción modificada correctamente.');
    } catch(e) {
        res.status(404).send('Hemos detectado un error: ' + e + '. Intenta cambiando el nombre de la canción.');
    }
};

const deleteSong = async(req, res) => {
    let song = req.params.name;
    try {
        controllerSong.removeSong(song);
        res.status(404).send('Canción eliminada correctamente.');
    } catch(e) {
        res.status(404).send('Hemos encontrado un error: ' + e + '. Intenta cambiando el nombre de la canción.');
    }
};
 
module.exports = {
    getSongs,
    getSongByName,
    addSongs,
    updateSong,
    deleteSong
};