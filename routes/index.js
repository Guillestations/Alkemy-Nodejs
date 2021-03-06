const express = require("express");
const router = express.Router();
const personajeController = require("../controllers/personajeController");
const pelisController = require("../controllers/pelisController");
const userController = require("../controllers/userController");

// Middleware
const auth = require("../middleware/auth");

// Importo express validator
const { body } = require("express-validator/check");

module.exports = function () {
  // Rutas de la API
  /*****************  AUTH DE USUARIOS  *******************/
  router.post("/auth/register", userController.signUp);
  router.post("/auth/login", userController.signIn);

  /******* CRUD PERSONAJES *********/
  // Mostrar personajes
  router.get("/characters", auth, personajeController.getPersonaje);
  // Crear personaje
  router.post(
    "/characters",
    [
      body("nombre").not().isEmpty().trim().escape(),
      body("edad", "Ingrese una edad numerica valida")
        .exists()
        .isNumeric()
        .escape(),
      body("imagen", "Ingrese la ruta exacta de la imagen")
        .exists()
        .isLength({ min: 15 }),
      body("peso", "Ingrese un peso numerico valido")
        .exists()
        .isNumeric()
        .escape(),
      body("historia", "Ingrese una cadena de texto con la historia")
        .exists()
        .isLength({ min: 20 })
        .escape(),
      body("peliSerie", "Ingrese una Pelicula o Serie")
        .exists()
        .isLength({ min: 20 })
        .escape(),
    ],
    auth,
    personajeController.nuevoPersonaje
  );
  // Actualizar personaje
  router.put("/characters/:id", auth, personajeController.updatePersonaje);
  // Eliminar personaje
  router.delete("/characters/:id", auth, personajeController.deletePersonaje);

  /******* CRUD PELICULAS O SERIES *********/
  router.get("/movies", auth, pelisController.getPelisSeries);
  router.post(
    "/movies",
    [
      body("titulo", "Ingrese un titulo valido")
        .not()
        .isEmpty()
        .trim()
        .escape(),
      body("imagen", "Ingrese la ruta exacta de la imagen")
        .exists()
        .isLength({ min: 15 }),
      body("fecha", "Ingrese una fecha").exists().isISO8601().escape(),
      body("calificacion", "Ingrese un peso numerico valido")
        .exists()
        .isNumeric()
        .isLength({ min: 1, max: 5 })
        .escape(),
    ],
    auth,
    pelisController.subirArchivo,
    pelisController.nuevoPeliSerie
  );
  router.put("/movies/:id", auth, pelisController.updatePelisSeries);
  router.delete("/movies/:id", auth, pelisController.deletePeliSerie);

  return router;
};
