module.exports = (Sequelize, connector) => {
  const Response = connector.define("response", {
    twitter: {
      type: Sequelize.BOOLEAN,
    },
    facebook: {
      type: Sequelize.BOOLEAN,
    },
    email: {
      type: Sequelize.BOOLEAN,
    },
    whatsapp: {
      type: Sequelize.BOOLEAN,
    },
    trust: {
      type: Sequelize.INTEGER,
    },
    quality: {
      type: Sequelize.INTEGER,
    },
    articleId: {
      type: Sequelize.INTEGER,
    },
  });

  return Response;
};
