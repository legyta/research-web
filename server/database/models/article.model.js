module.exports = (Sequelize, connector) => {
  const Article = connector.define("article", {
    articleId: {
      type: Sequelize.INTEGER,
    },
  });

  return Article;
};
