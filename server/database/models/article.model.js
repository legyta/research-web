module.exports = (Sequelize, connector) => {
  const Article = connector.define("article", {});

  return Article;
};
