module.exports = (Sequelize, connector) => {
  const Response = connector.define("response", {
    twitter: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    facebook: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    email: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    whatsapp: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    trust: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    quality: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  });

  return Response;
};
