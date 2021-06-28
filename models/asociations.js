const Genero = require('./Genero');
const Personaje = require('./Personaje');
const Peli_Serie = require('./Peli_Serie');

// relacion uno a muchos
Personaje.hasMany(Peli_Serie, { as: 'peli_serie', foreignKey: 'personajeId'});

Peli_Serie.belongsTo(Personaje, { as: 'personaje'});