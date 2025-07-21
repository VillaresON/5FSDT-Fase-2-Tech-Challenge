const request = require('supertest');
const app = require('../app.js'); 

describe('Testando Rotas da API',()=>{
    it('GET /posts - Deve retornar todos os posts', async () => {
        const response = await request(app).get('/posts');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
})