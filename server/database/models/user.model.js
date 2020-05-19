module.exports = (Sequelize, connector) => {
  const User = connector.define("user", {
    age: {
      type: Sequelize.INTEGER,
    },
    gender: {
      type: Sequelize.STRING,
    },
    education: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
