const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

exports.signUp = (req, res) => {
  // encripto la contraseña
  let password = bcrypt.hashSync(req.body.password, +authConfig.rounds);

  User.create({
    name: req.body.name,
    email: req.body.email,
    password: password,
  })
    .then((user) => {
      // genero el token
      let token = jwt.sign({ user: user }, authConfig.secret, {
        expiresIn: authConfig.expire,
      });

      res.status(200).json({
        user: user,
        token: token,
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.signIn = (req, res) => {
  let { email, password } = req.body;
  // Buscar Usuario
  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    if (!user) {
      res.status(404).json({ msg: "Email no encontrado" });
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        // genero el token
        let token = jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expire,
        });
        res.json({
          user,
          token,
        });
      } else {
        res.status(401).json({ msg: "Contraseña Incorrecta" });
      }
    }
  });
};
