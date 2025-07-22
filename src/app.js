const express = require('express');
const routes = require('./routes/index.js');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger.js');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


routes(app);

module.exports = app;