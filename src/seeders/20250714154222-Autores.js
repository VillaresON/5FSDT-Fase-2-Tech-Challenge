'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Autores', [
      {
        nome: 'Roberto Carlos da Silva',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Claudia Leitte de Souza',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Marcos Vinicius Pereira',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Leandro de Oliveira',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ana Beatriz Silva',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
