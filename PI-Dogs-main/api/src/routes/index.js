const { Router } = require('express');
const dogsRouter = require('./dogs'); // No necesitas reemplazar 'dogs' si ese es el nombre del archivo de rutas para razas de perros
const temperamentsRouter = require('./temperaments'); // No necesitas reemplazar 'temperaments' si ese es el nombre del archivo de rutas para temperamentos

const router = Router();

// Configurar los routers
router.use('/dogs', dogsRouter); // Utiliza '/dogs' como prefijo para las rutas relacionadas con razas de perros
router.use('/temperaments', temperamentsRouter); // Utiliza '/temperaments' como prefijo para las rutas relacionadas con temperamentos

module.exports = router;
