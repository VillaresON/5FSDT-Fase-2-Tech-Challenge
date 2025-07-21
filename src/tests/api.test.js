const request = require('supertest');
const app = require('../app.js');

describe('Testando Rotas da API', () => {
    it('GET /posts - Deve retornar todos os posts', async () => {
        const response = await request(app).get('/posts');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('POST /posts - Deve criar um novo post', async () => {
        const newPost = { titulo: 'Novo Post', conteudo: 'Conteúdo do novo post', autor_id: 1 };
        const response = await request(app).post('/posts').send(newPost);
        expect(response.statusCode).toBe(201);
        expect(response.body.titulo).toBe(newPost.titulo);
    });

    it('GET /posts/:id - Deve retornar um post específico', async () => {
        const response = await request(app).get('/posts/1');
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(1);
    });

    it('PUT /posts/:id - Deve atualizar um post específico', async () => {
        const updatedPost = { title: 'Post Atualizado', content: 'Conteúdo atualizado' };
        const response = await request(app).put('/posts/1').send(updatedPost);
        expect(response.statusCode).toBe(200);
        expect(response.body.title).toBe(updatedPost.title);
    });

    it('DELETE /posts/:id - Deve deletar um post específico', async () => {
        const response = await request(app).delete('/posts/1');
        expect(response.statusCode).toBe(204);
    });

    it('GET /autores - Deve retornar todos os autores', async () => {
        const response = await request(app).get('/autores');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('POST /autores - Deve criar um novo autor', async () => {
        const newAuthor = { nome: 'Novo Autor' };
        const response = await request(app).post('/autores').send(newAuthor);
        expect(response.statusCode).toBe(201);
        expect(response.body.nome).toBe(newAuthor.nome);
    });

    it('GET /autores/:id - Deve retornar um autor específico', async () => {
        const response = await request(app).get('/autores/1');
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(1);
    });

    it('PUT /autores/:id - Deve atualizar um autor específico', async () => {
        const updatedAuthor = { nome: 'Autor Atualizado' };
        const response = await request(app).put('/autores/1').send(updatedAuthor);
        expect(response.statusCode).toBe(200);
        expect(response.body.nome).toBe(updatedAuthor.nome);
    });

    it('DELETE /autores/:id - Deve deletar um autor específico', async () => {
        const response = await request(app).delete('/autores/1');
        expect(response.statusCode).toBe(204);
    });


})