const express = require('express');
const post = require('../routes/postRouter.js');
const autor = require('../routes/autorRouter.js');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.redirect('http://localhost:3000/api-docs/');
    });
    app.use(express.json(), post, autor);
}