const controllerSong = require('./controller');

const getSongs = async(req, res) => {
    try {
        let songs = await controllerSong.findSongs();
        console.log(songs + 'desde route');
        res.status(200).send(songs);
    } catch(e) {
        res.status(404).send(e + '/: No hemos encontrado ninguna canción en la base de datos');
    }
};


module.exports = {
    getSongs
};