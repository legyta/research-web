import React from "react";
import "../stylesheets/article.css";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Article({ article, handleSelectArticle }) {
  return (
    <div>
      <div className="article-container">
        <div className="cards">
          <Card>
            <Card.Img variant="top" src={article.url} />
            <Card.Body>
              <Card.Title className="card-title">{article.title}</Card.Title>
              <Button>
                <Link
                  to="/response"
                  onClick={() => handleSelectArticle(article)}
                >
                  View Article
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Article;
