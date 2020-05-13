module.exports = (Sequelize, connector) => {
  const Article = connector.define("article", {
    article_id: {
      type: Sequelize.INTEGER,
    },
  });

  return Article;
};
