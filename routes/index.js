const express = require('express');
const router = express.Router();
const personajeController = require('../controllers/personajeController');
const pelisController = require('../controllers/pelisController');
// Importo express validator
const { body } = require('express-validator/check');

module.exports = function(){
    // Rutas de la API
    /******* CRUD PERSONAJES *********/
        // Mostrar personajes
    router.get('/characters', personajeController.getPersonaje);
        // Crear personaje
    router.post('/characters',
    [
        body('nombre').not().isEmpty().trim().escape(),
        body('edad','Ingrese una edad numerica valida').exists().isNumeric().escape(),
        body('imagen','Ingrese la ruta exacta de la imagen').exists().isLength({min: 15}),
        body('peso','Ingrese un peso numerico valido').exists().isNumeric().escape(),
        body('historia','Ingrese una cadena de texto con la historia').exists().isLength({min:20}).escape(),
        body('peliSerie','Ingrese una Pelicula o Serie').exists().isLength({min:20}).escape()
    ],
    personajeController.nuevoPersonaje);
        // Actualizar personaje
    router.put('/characters/:id', personajeController.updatePersonaje);
        // Eliminar personaje
    router.delete('/characters/:id', personajeController.deletePersonaje);

    /******* CRUD PELICULAS O SERIES *********/
    router.get('/movies', pelisController.getPelisSeries);
    router.post('/movies',
    [
        body('titulo','Ingrese un titulo valido').not().isEmpty().trim().escape(),
        body('imagen','Ingrese la ruta exacta de la imagen').exists().isLength({min:15}),
        body('fecha','Ingrese una fecha').exists().isISO8601().escape(),
        body('calificacion','Ingrese un peso numerico valido').exists().isNumeric().isLength({min:1, max:5}).escape(),
    ],
    pelisController.nuevoPeliSerie);
    router.put('/movies/:id', pelisController.updatePelisSeries);
    router.delete('/movies/:id', pelisController.deletePeliSerie);
    return router;
}