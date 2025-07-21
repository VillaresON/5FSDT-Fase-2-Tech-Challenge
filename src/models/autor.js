'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Autor.hasMany(models.Post, {
        foreignKey: 'autor_id',
        as: 'posts'
      });
    }
  }
  Autor.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Autor',
    tableName: 'autores',
  });
  return Autor;
};