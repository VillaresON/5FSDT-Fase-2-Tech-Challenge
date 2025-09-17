const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();
const SECRET = "segredo_super_secreto"; // troque em produção

// Registrar professor
router.post("/register", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const hash = await bcrypt.hash(senha, 10);

    const user = await User.create({ nome, email, senha: hash });

    res.json({ message: "Usuário registrado com sucesso!", user });
  } catch (err) {
    res.status(400).json({ error: "Erro ao registrar usuário", details: err });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ error: "Usuário não encontrado" });

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) return res.status(401).json({ error: "Senha inválida" });

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login realizado com sucesso!", token });
  } catch (err) {
    res.status(500).json({ error: "Erro no login", details: err });
  }
});

// Middleware de autenticação
function autenticarToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Exemplo de rota protegida
router.get("/dashboard", autenticarToken, (req, res) => {
  res.json({ message: `Bem-vindo, usuário ${req.user.email}!` });
});

module.exports = router;
