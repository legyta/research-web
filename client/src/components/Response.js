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

  handleSubmitResponse = (id, values) => {
    console.log(values);
    responseHelper(selectedArticleReducer.id, values);
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
              <h2>{this.props.article.title}</h2>
            </div>
            <div className="response-image">
              <img
                className="response-image"
                src={this.props.article.url}
                alt=""
              />
              <p className="response-caption">{this.props.article.caption}</p>
            </div>

            <div className="response-likes">
              <p>👍 {this.props.article.likes} |</p>
              <p> {this.props.article.posts} |</p>
              <p>{this.props.article.shares}</p>
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

//OPTION FOR NUMBER SELECT

{
  /* 
      <div className="field">
        <div className="control">
          <label className="label">Proficiency</label>
          <div className="select">
            <Field className="input" name="proficiency" component="select">
              <option />
              <option value="beginner">1</option>
              <option value="intermediate">2</option>
              <option value="expert">3</option>
            </Field>
          </div>
        </div>
      </div> */
}
