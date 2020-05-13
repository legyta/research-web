import React, { Component } from "react";
import { connect } from "react-redux";
import ArticlesList from "./ArticlesList";
import applyFilter from "../helper/applyFilter";
//import "../stylesheets/Articles.scss";
import { Link } from "react-router-dom";
import Header from "./Header";
import responseHelper from "../helper/responseHelper";

class Articles extends Component {
  handleSelectArticle = (article) => {
    this.props.selectArticle(article);
  };

  handleSubmitResponse = (response) => {
    this.props.submitForm(response);
  };

  render() {
    return (
      <div className="landing--navbar">
        <Link to="/articles"></Link>
        <div>
          {" "}
          <Header />{" "}
        </div>
        <div className="landing--productlist">
          <ArticlesList
            list={applyFilter(this.props.filter, this.props.sort)}
            handleSelectArticle={this.handleSelectArticle}
            handleSubmitResponse={this.handleSubmitResponse}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    filter: state.category.filter,
    article: state.select.article,
    response: state.form.response,
  };
};
const mapDispatchToProps = (dispatch) => ({
  updateFilter: (category) =>
    dispatch({ type: "CHOOSE_FILTER", filter: category }),
  selectArticle: (article) =>
    dispatch({ type: "SELECT_ARTICLE", article: article }),

  submitForm: (response) => dispatch({ type: "SUBMIT_FORM", form: response }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
