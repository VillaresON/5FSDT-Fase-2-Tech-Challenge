// models/User.js (formato compatível com sequelize-cli)
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User;
};
