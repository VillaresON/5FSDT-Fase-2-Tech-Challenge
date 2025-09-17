const express = require('express');
const routes = require('./routes/index.js');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger.js');
const cors = require('cors');
const user = require("./models/User.js");
const authRoutes = require("./routes/auth");
const sequelize = require("./database");

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const corsOptions = {
  origin: 'http://localhost:5173', // Substitua pelo endereço do seu frontend Vite
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Especifique os métodos HTTP permitidos
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/auth", authRoutes);
routes(app);

module.exports = app;