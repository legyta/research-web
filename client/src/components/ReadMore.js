import React, { Component } from "react";
import "../stylesheets/readmore.css";

export default class ReadMore extends Component {
  render() {
    return <div className="readmore-wrapper">{this.props.read}</div>;
  }
}
