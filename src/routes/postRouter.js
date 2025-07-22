const PostController = require('../controllers/PostController.js');
const postController = new PostController();
const { Router } = require('express');
const routes = Router();


/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Lista todos os posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista de posts
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
 *                   titulo:
 *                     type: string
 *                     example: "Programação em JavaScript"
 *                   conteudo:
 *                     type: string
 *                     example: "Aprenda os fundamentos da programação em JavaScript."
 *                   autor_id:
 *                     type: integer
 *                     example: 1
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */

routes.get('/posts', (req, res) => postController.PegarTodosOsDados(req, res));

/**
 * @swagger
 * /posts/autores:
 *   get:
 *     summary: Lista todos os posts e seus autores
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista de posts com autores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   titulo:
 *                     type: string
 *                     example: "Programação em JavaScript"
 *                   conteudo:
 *                     type: string
 *                     example: "Aprenda os fundamentos da programação em JavaScript."
 *                   autor:
 *                     type: object
 *                     properties:
 *                       nome:
 *                         type: string
 *                         example: "João da Silva"
 */
routes.get('/posts/autores', (req, res) => postController.PegarDadosComAutores(req, res));

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Cria um novo post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - conteudo
 *               - autor_id
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: "Programação em JavaScript"
 *               conteudo:
 *                 type: string
 *                 example: "Aprenda os fundamentos da programação em JavaScript."
 *               autor_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *       400:
 *         description: Erro na validação dos dados
 */
routes.post('/posts', (req, res) => postController.CriarDados(req, res));
/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Obtém um post específico por ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do post a ser obtido
 *     responses:
 *       200:
 *         description: Post encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1 
 *                 titulo:
 *                   type: string
 *                   example: "Programação em JavaScript"
 *                 conteudo:
 *                   type: string
 *                   example: "Aprenda os fundamentos da programação em JavaScript."
 *                 autor_id:
 *                   type: integer
 *                   example: 1
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Post não encontrado
 */
routes.get('/posts/:id', (req, res) => postController.PegarDadosPorId(req, res));
/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Atualiza um post específico por ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do post a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: "Programação em JavaScript"
 *               conteudo:
 *                 type: string
 *                 example: "Aprenda os fundamentos da programação em JavaScript."
 *     responses:
 *       200:
 *         description: Post atualizado com sucesso
 */
routes.put('/posts/:id', (req, res) => postController.AtualizarDados(req, res));
/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Deleta um post específico por ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do post a ser deletado
 *     responses:
 *       200:
 *         description: Post deletado com sucesso
 */
routes.delete('/posts/:id', (req, res) => postController.DeletarDados(req, res));
/**
 * @swagger
 * /posts/search/{titulo}:
 *   get:
 *     summary: Busca posts por título
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: titulo
 *         required: true
 *         schema:
 *           type: string
 *         description: Título do post a ser buscado
 *     responses:
 *       200:
 *         description: Lista de posts encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
routes.get('/posts/search/:titulo', (req, res) => postController.PegarDadosPorTitulo(req, res));






module.exports = routes;

