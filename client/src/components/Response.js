import React, { Component } from "react";
import ReadMore from "./ReadMore";
import "../stylesheets/response.css";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import responseHelper from "../helper/responseHelper";
import Header from "./Header";
import ResponseSubmit from "./ResponseSubmit";
import selectedArticleReducer from "../reducers/selectedArticleReducer";
import { GrLike } from "react-social-icons";

export class ProductDetails extends Component {
  state = {
    isReadMoreMounted: false,
    response: false,
  };
  toggleReadMore = () => {
    this.setState({
      isReadMoreMounted: !this.state.isReadMoreMounted,
    });
  };

  handleSubmitResponse = (values) => {
    const {
      article: { article_id },
    } = this.props;

    console.log({ article_id, ...values });
    responseHelper({ article_id, ...values });
  };

  render() {
    return (
      <div className="response-container">
        <div>
          <Header />
        </div>

        <div className="response-wrapper">
          <div className="response-information">
            <div className="response-content">
              <h1>{this.props.article.title}</h1>
            </div>
            <div className="response-image">
              <img
                className="response-image"
                src={this.props.article.url}
                alt=""
              />
              <div className="response-caption">
                <p>{this.props.article.caption}</p>
              </div>
            </div>

            <div className="response-likes">
              <p> {this.props.article.likes} 👍</p>
              <p> {this.props.article.posts} </p>
              <p> {this.props.article.shares}</p>
            </div>

            <div className="response-text">
              <p>{this.props.article.text}</p>
            </div>
          </div>
        </div>
        <div className="response-read">
          <button className="button" onClick={this.toggleReadMore}>
            - read more -
          </button>
        </div>
        <div className="response-read">
          {this.state.isReadMoreMounted ? (
            <div className="read">
              <ReadMore read={this.props.article.read} />{" "}
            </div>
          ) : null}
        </div>
        <ResponseSubmit onSubmit={this.handleSubmitResponse} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.select.article,
  };
};

export default connect(mapStateToProps)(ProductDetails);
