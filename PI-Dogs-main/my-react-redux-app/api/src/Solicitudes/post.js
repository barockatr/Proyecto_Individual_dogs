const { Sequelize } = require('sequelize');
const Dogs = require('../models/Dog');
const Temperaments = require('../models/Temperament');

const sequelize = new Sequelize('postgres://antonio:@localhost/dogs', {
  logging: false,
  native: false,
});

const createDog = async (req, res) => {
  const { name, height, weight, life_span, temperaments } = req.body;

  try {
    const nuevaRaza = await Dogs.create({
      name,
      height,
      weight,
      life_span,
    });

    // Relaciona la nueva raza con los temperamentos indicados
    await nuevaRaza.setTemperaments(temperaments);

    res.status(201).json(nuevaRaza);
 
