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

/**
 * @swagger
 * /autores:
 *   get:
 *     summary: Lista todos os autores
 *     tags: [Autores]
 *     responses:
 *       200:
 *         description: Lista de autores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nome:
 *                     type: string
 *                     example: "João da Silva"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */

/**
 * @swagger
 * /autores/posts:
 *   get:
 *     summary: Lista todos os autores e seus posts
 *     tags: [Autores]
 *     responses:
 *       200:
 *         description: Lista de autores com posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nome:
 *                     type: string
 *                     example: "João da Silva"
 *                   posts:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         titulo:
 *                           type: string
 *                           example: "Programação em JavaScript"
 *                         conteudo:
 *                           type: string
 *                           example: "Aprenda os fundamentos da programação em JavaScript."
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2023-03-15T12:00:00Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2023-03-15T12:00:00Z"
 */

/**
 * @swagger
 * /autores/{id}:
 *   get:
 *     summary: Busca um autor por ID
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do autor a ser buscado
 *     responses:
 *       200:
 *         description: Autor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nome:
 *                   type: string
 *                   example: "João da Silva"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-03-15T12:00:00Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-03-15T12:00:00Z"
 *       404:
 *         description: Autor não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Autor não encontrado"
 *       400:
 *         description: Erro de validação
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Erro de validação"
 */

/**
 * @swagger
 * /autores:
 *   post:
 *     summary: Cria um novo autor
 *     tags: [Autores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Maria da Silva"
 *     responses:
 *       201:
 *         description: Autor criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 2
 *                 nome:
 *                   type: string
 *                   example: "Maria da Silva"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-03-15T12:00:00Z"
 */

/**
 * @swagger
 * /autores/{id}:
 *   put:
 *     summary: Atualiza um autor existente
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do autor a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "João da Silva Atualizado"
 *     responses:
 *       200:
 *         description: Autor atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nome:
 *                   type: string
 *                   example: "João da Silva Atualizado"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-03-15T12:00:00Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-03-15T12:00:00Z"
 */

/**
 * @swagger
 * /autores/{id}:
 *   delete:
 *     summary: Deleta um autor por ID
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do autor a ser deletado
 *     responses:
 *       204:
 *         description: Autor deletado com sucesso
 *       404:
 *         description: Autor não encontrado
 */

module.exports = routes;
