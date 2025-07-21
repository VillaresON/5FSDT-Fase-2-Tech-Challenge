const express = require('express');
const post = require('../routes/postRouter.js');
const autor = require('../routes/autorRouter.js');

module.exports = (app) => {
    app.use(express.json(), post, autor);
}