const { Sequelize } = require('sequelize');
const Dogs = require('../models/Dog');
const Temperaments = require('../models/Temperament');

const sequelize = new Sequelize('postgres://antonio:@localhost/dogs', {
  logging: false,
  native: false,
});

const getDogDetails = async (req, res) => {
  const { idRaza } = req.params;
  let detallesRaza;

  try {
    detallesRaza = await Dogs.findByPk(idRaza, {
      include: Temperaments,
    });

    if (!detallesRaza) {
      // Si no se encuentra en la base de datos, realiza la consulta a la API correspondiente y asigna los detalles a "detallesRaza".
      // Agrega aquí la lógica para consultar desde la API externa si no se encuentra en la base de datos.
    }

    if (detallesRaza) {
      res.json(detallesRaza);
    } else {
      res.status(404).json({ error: 'Raza no encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener los detalles de la raza:', error);
    res.status(500).json({ error: 'Hubo un problema al obtener los detalles de la raza' });
  }
};

module.exports = getDogDetails;
