module.exports = (Sequelize, connector) => {
  const User = connector.define("user", {
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    education: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return User;
};
