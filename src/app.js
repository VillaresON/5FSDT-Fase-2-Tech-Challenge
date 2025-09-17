const express = require('express');
const routes = require('./routes/index.js');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger.js');
const cors = require('cors');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const corsOptions = {
  origin: 'http://localhost:5173', // Substitua pelo endereço do seu frontend Vite
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Especifique os métodos HTTP permitidos
};
app.use(cors(corsOptions));
routes(app);

module.exports = app;