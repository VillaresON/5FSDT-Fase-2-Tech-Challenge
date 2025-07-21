const PostController = require('../controllers/postController.js');
const postController = new PostController();
const { Router } = require('express');
const routes = Router();

routes.get('/posts', (req, res) => postController.PegarTodosOsDados(req, res));
routes.get('/posts/autores', (req, res) => postController.PegarDadosComAutores(req, res));
routes.post('/posts', (req, res) => postController.CriarDados(req, res));
routes.get('/posts/:id', (req, res) => postController.PegarDadosPorId(req, res));
routes.put('/posts/:id', (req, res) => postController.AtualizarDados(req, res));
routes.delete('/posts/:id', (req, res) => postController.DeletarDados(req, res));
routes.get('/posts/search/:titulo', (req, res) => postController.PegarDadosPorTitulo(req, res));

module.exports = routes;

