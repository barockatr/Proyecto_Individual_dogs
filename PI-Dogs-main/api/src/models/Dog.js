const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Definimos el modelo "Dog" con los campos requeridos
  sequelize.define('Dog', {
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Altura: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Peso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Años_de_vida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
