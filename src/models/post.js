'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.Autor, {
        foreignKey: 'autor_id',
        as: 'autor'
      });
      // define association here --- IGNORE ---
    }
  }
  Post.init({
    titulo: DataTypes.STRING,
    conteudo: DataTypes.STRING,
    autor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
  });
  return Post;
};