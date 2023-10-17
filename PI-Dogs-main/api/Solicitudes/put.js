const { Sequelize } = require('sequelize');
const Dogs = require('../models/Dog');
const Temperaments = require('../models/Temperament');

const sequelize = new Sequelize('postgres://antonio:@localhost/dogs', {
  logging: false,
  native: false,
});

const updateDog = async (req, res) => {
  const { idRaza } = req.params;
  const { name, height, weight, life_span, temperaments } = req.body;

  try {
    const raza = await Dogs.findByPk(idRaza);

    if (!raza) {
      res.status(404).json({ error: 'Raza no encontrada' });
    } else {
      raza.name = name;
      raza.height = height;
      raza.weight = weight;
      raza.life_span = life_span;
      await raza.save();

      // Relaciona la raza actualizada con los nuevos temperamentos indicados
      await raza.setTemperaments(temperaments);

      res.json(raza);
    }
  } catch (error) {
    console.error('Error al actualizar la raza de perro:', error);
    res.status(500).json({ error: 'Hubo un problema al actualizar la raza de perro' });
  }
};

module.exports = updateDog;
