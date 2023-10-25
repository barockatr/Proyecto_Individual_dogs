const { Sequelize } = require('sequelize');
const Dogs = require('../models/Dog');

const sequelize = new Sequelize('postgres://antonio:@localhost/dogs', {
  logging: false,
  native: false,
});

const deleteDog = async (req, res) => {
  const { idRaza } = req.params;

  try {
    const raza = await Dogs.findByPk(idRaza);

    if (!raza) {
      res.status(404).json({ error: 'Raza no encontrada' });
    } else {
      await raza.destroy();
      res.status(204).send();
    }
  } catch (error) {
    console.error('Error al eliminar la raza de perro:', error);
    res.status(500).json({ error: 'Hubo un problema al eliminar la raza de perro' });
  }
};

module.exports = deleteDog;
