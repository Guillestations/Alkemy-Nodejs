const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = (req, res, next) => {
  console.log(req.headers);

  // compruebo que existe el token
  if (!req.headers.authorization) {
    res.status(401).json({ msg: "Acceso no autorizado" });
  } else {
    // Comprubo la validez de este token
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        res
          .status(500)
          .json({ msg: "Ocurrio un error al decodificar el token", err });
      } else {
        req.user = decoded;
        next();
      }
    });
  }
};
