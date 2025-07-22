const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API com Swagger',
      version: '1.0.0',
      description: 'Documentação da API usando Swagger UI',
    },
  },
  apis: ['./src/routes/*.js'], // Caminho para seus arquivos de rota com comentários Swagger
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
