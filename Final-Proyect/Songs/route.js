const controllerSong = require('./controller');

const getSongs = async(req, res) => {
    try {
        let songs = await controllerSong.findSongs();
        res.status(200).send(songs);
    } catch(e) {
        res.status(404).send(e + '/: No hemos encontrado ninguna canción en la base de datos');
    }
};

const getSongById = async(req, res) => {
    let name = req.params.name;
    let songList = await controllerSong.findSongs();
            const result = songList.filter((song) => {
                if(song.name == name){
                    res.status(200).send(result);
                } else {
                    res.status(404).send('No hemos encontrado una cancion con ese nombre.');
                }
            });
};

const addSongs = async(req, res) => {
    let bodySong = req.body;
    controllerSong.newSong(bodySong);
    res.send('hola');
};

const updateSong = async(req, res) => {
    let name = req.params.name;
    let changes = req.body;
    let songList = await controllerSong.findSongs();
    let result = songList.filter((s) => {
        if(s.name == name) {
            controllerSong.modifiedSong(changes);
            res.status(200).send('Canción encontrada.');
        } else {
            res.status(404).send('No hemos encontrado una canción con ese nombre');
        }
    }); 
};

module.exports = {
    getSongs,
    getSongById,
    addSongs,
    updateSong
};