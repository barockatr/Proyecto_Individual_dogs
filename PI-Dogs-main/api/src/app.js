const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');
const axios = require('axios');

const server = express();

// Configura la conexión a la base de datos PostgreSQL.
const sequelize = new Sequelize('postgres://antonio:@localhost/dogs', {
  logging: false, // Desactiva el registro de consultas SQL en la consola
  native: false, // Desactiva la extensión nativa para PostgreSQL
});

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser();
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Importa las rutas de solicitudes CRUD
const getDogDetails = require('./requests/get');
const createDog = require('./requests/post');
const updateDog = require('./requests/put');
const deleteDog = require('./requests/delete');

// Define las rutas CRUD
server.get('/dogs/:idRaza', getDogDetails);
server.post('/dogs', createDog);
server.put('/dogs/:idRaza', updateDog);
server.delete('/dogs/:idRaza', deleteDog);

// Resto del código (importación de modelos, configuración de base de datos, etc.)

// Inicia el servidor en el puerto especificado o
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
