const PeliSerie = require("../models/Peli_Serie");
const multer = require("multer");
const shortid = require("shortid");

const configuracionMulter = {
  storage: (fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname + "../../uploads/");
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split("/")[1];
      cb(null, `${shortid.generate()}.${extension}`);
    },
  })),
  fileFilter(req, file, cb) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Formato no valido"));
    }
  },
};

// paso la configuracion y el campo
const upload = multer(configuracionMulter).single("imagen");

// subir un archivo
exports.subirArchivo = (req, res, next) => {
  upload(req, res, function (error) {
    if (error) {
      res.json({ message: error });
    }
    return next();
  });
};

exports.nuevoPeliSerie = async (req, res, next) => {
  const { titulo, fecha, calificacion } = req.body;
  const imagen = req.file.filename;
  let newPeliSerie;
  console.log(newPeliSerie);

  let errores = [];
  try {
    if (req.file.filename) {
      newPeliSerie = {
        titulo: titulo,
        fecha: fecha,
        calificacion: calificacion,
        imagen: imagen,
      };
      //newPeliSerie.imagen = req.file.filename;
    }
    if (!newPeliSerie) {
      errores.push({ texto: "Todos los campos son requeridos" });
    }
    if (errores.length > 0) {
      res.send("Debes Ingresar todos los datos del Pelicula/Serie");
    } else {
      const peliSerie = await PeliSerie.create(newPeliSerie);
      res.send(`El se creo correctamente el película/serie: ${peliSerie} `);
    }
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getPelisSeries = async (req, res) => {
  const peliSerie = await PeliSerie.findAll({
    attributes: ["titulo", "imagen", "fecha"],
  });
  console.log(peliSerie);
  res.send(peliSerie);
};

exports.updatePelisSeries = async (req, res) => {
  const peliSerie = await PeliSerie.update(
    {
      titulo: req.body.titulo,
      imagen: req.body.imagen,
      fecha: req.body.fecha,
      calificacion: req.body.calificacion,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(peliSerie);
};

exports.deletePeliSerie = async (req, res) => {
  await PeliSerie.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("La Pelicula/Serie se elimino correctamente");
};
