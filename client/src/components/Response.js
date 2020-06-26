import React, { Component } from "react";
//import ReadMore from "./ReadMore";
import "../stylesheets/response.css";
import { connect, useSelector } from "react-redux";
import responseHelper from "../helper/responseHelper";
import Header from "./Header";
import ResponseSubmit from "./ResponseSubmit";
import selectedArticleReducer from "../reducers/selectedArticleReducer";

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
      user: { id: user_id },
    } = this.props;

    responseHelper(
      { article_id, user_id, ...values },
      this.props.history.push("/articles")
    );
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
              <p>{this.props.article.text1}</p>
              <p>{this.props.article.text2}</p>
              <p>{this.props.article.text3}</p>
              <p>{this.props.article.text4}</p>
              <p>{this.props.article.text5}</p>
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
            <div className="readmore-wrapper">
              <p>{this.props.article.read}</p>
              <p>{this.props.article.read1}</p>
              <p>{this.props.article.read2}</p>
              <p>{this.props.article.read3}</p>
              <p>{this.props.article.read4}</p>
              <p>{this.props.article.read5}</p>
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
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(ProductDetails);
