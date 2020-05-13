import React, { Component } from "react";
//import "../stylesheets/popup.scss";

export default class ReadMore extends Component {
  render() {
    return <div className="popup--wrapper">{this.props.read}</div>;
  }
}
