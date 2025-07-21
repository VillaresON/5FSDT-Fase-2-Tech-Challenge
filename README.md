# 5FSDT-Fase-2-Tech-Challenge
Plataforma onde professores possam postar suas aulas e transmitir conhecimento para alunos e alunas de forma prática, centralizada e tecnológica. 

Documentação Técnica do Projeto
🧰 1. Setup Inicial
1.1 Requisitos do Sistema

Linguagem: Node.js >= 18 
Banco de Dados: Sqlite3
Importante ter Docker Instalado!

1.2 Instalação do Projeto
Clonar o repositório:
git clone https://github.com/VillaresON/5FSDT-Fase-2-Tech-Challenge

Configuração de variáveis de ambiente:
Crie um arquivo .env com base no .env.example e configure:
PORT=3000

Rodar a aplicação:
npm run start

Rodar com Docker (opcional):
1º docker build . --file Dockerfile --tag techchallenge:latest
2º docker run --name TechChallenge -p 3000:3000 techchallenge:latest

🏗️ 2. Arquitetura da Aplicação
2.1 Visão Geral
O sistema é dividido em 2 camadas principais: backend (Node.js/Express/Sequelize) e banco de dados (Sqlite3).

2.2 Diagrama da Arquitetura
[Backend] ---> [API REST] ---> [Banco de Dados]

2.3 Estrutura de Diretórios (Backend)
/src
  /controllers
  /routes
  /models
  /services
  /middlewares
  /config
  app.js
server.js

2.4 Tecnologias Utilizadas
Express.js
Sequelize ORM
Docker
Swagger (para documentação da API)

🔌 3. Guia de Uso das APIs
3.1 Documentação Interativa (Swagger)
Disponível em: http://localhost:3000/api-docs

🧪 4. Testes
4.1 Rodar Testes Unitários
npm test
npx jest

📎 5. Anexos e Referências
[Link para Swagger](https://swagger.io/docs/specification/v3_0/links/)
