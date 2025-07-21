const AutorController = require('../controllers/AutorController.js');
const autorController = new AutorController();
const { Router } = require('express');
const routes = Router();

routes.get('/autores', (req, res) => autorController.PegarTodosOsDados(req, res));
routes.post('/autores', (req, res) => autorController.CriarDados(req, res));
routes.get('/autores/posts', (req, res) => autorController.PegarDadosComPosts(req, res));
routes.get('/autores/:id', (req, res) => autorController.PegarDadosPorId(req, res));
routes.put('/autores/:id', (req, res) => autorController.AtualizarDados(req, res));
routes.delete('/autores/:id', (req, res) => autorController.DeletarDados(req, res));
routes.get('/autores/search/:nome', (req, res) => autorController.PegarDadosPorNome(req, res));


module.exports = routes;
