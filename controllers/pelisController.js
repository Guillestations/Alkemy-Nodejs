const PeliSerie = require('../models/Peli_Serie');

exports.nuevoPeliSerie = async (req, res) => {
    const { titulo, imagen, fecha, calificacion } = req.body;
    const newPeliSerie = {
        titulo: titulo,
        imagen: imagen,
        fecha: fecha,
        calificacion: calificacion
    }
    console.log(newPeliSerie)

    let errores = [];

    if(!newPeliSerie){
        errores.push({'texto': 'Todos los campos son requeridos'})
    }
    if(errores.length > 0 ){
        res.send('Debes Ingresar todos los datos del Pelicula/Serie')
    }else{
        const peliSerie = await PeliSerie.create(newPeliSerie);
        res.send(`El se creo correctamente el película/serie: ${peliSerie} `);
    }
}

exports.getPelisSeries = async (req, res) => {
    const peliSerie = await PeliSerie.findAll({ attributes: [ 'titulo', 'imagen','fecha']});
    console.log(peliSerie)
    res.send(peliSerie)
}

exports.updatePelisSeries = async (req, res) => {
    const peliSerie = await PeliSerie.update({
        titulo: req.body.titulo,
        imagen: req.body.imagen,
        fecha: req.body.fecha,
        calificacion: req.body.calificacion
    }, {
        where: {
            id: req.params.id
        }
    })
    res.send(peliSerie)
};

exports.deletePeliSerie = async (req, res) =>{
    await PeliSerie.destroy({
        where: {
            id: req.params.id
        }
    })
    res.send('La Pelicula/Serie se elimino correctamente')
}