const Personaje = require('../models/Personaje');

exports.nuevoPersonaje = async (req, res) => {
    const { nombre, edad, historia, imagen, peliSerie } = req.body;
    const newpersonaje = {
        nombre: nombre,
        edad: edad,
        historia: historia,
        imagen: imagen,
        peliSerie: peliSerie
    }
    console.log('*********',newpersonaje)

    let errores = [];

    if(!newpersonaje){
        errores.push({'texto': 'Todos los campos son requeridos'})
    }
    if(errores.length > 0 ){
        res.send('Debes Ingresar todos los datos del Personaje')
    }else{
        const personaje = await Personaje.create(newpersonaje);
        res.send(`El se creo correctamente el personaje: ${personaje} `);
    }
}

exports.getPersonaje = async (req, res) => {
    const personaje = await Personaje.findAll({ attributes: [ 'nombre', 'imagen']});
    console.log(personaje)
    res.send(personaje)
}

exports.updatePersonaje = async (req, res) => {
    const personaje = await Personaje.update({
        nombre: req.body.nombre,
        edad: req.body.edad,
        historia: req.body.historia,
        imagen: req.body.imagen
    }, {
        where: {
            id: req.params.id
        }
    })
    res.send(personaje)
}

exports.deletePersonaje = async (req, res) => {
    await Personaje.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send('El personaje se elimino correctamente')
}
exports.index = async (req, res) => {
    console.log('estoy aqui')
    res.send('entraste al home')
}