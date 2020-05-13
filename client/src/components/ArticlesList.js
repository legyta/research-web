import React from "react";
import Article from "./Article";
import articlesList from "../stylesheets/articlesList.css";

class ArticlesList extends React.Component {
  render() {
    this.componentDidMount = () => {};
    return (
      <div className="articlelist-container">
        {this.props.list.map((article) => (
          <Article
            key={article.title}
            article={article}
            handleSelectArticle={this.props.handleSelectArticle}
          />
        ))}
      </div>
    );
  }
}

export default ArticlesList;
