import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import responseSubmit from "../stylesheets/responseSubmit.css";
import { SocialIcon } from "react-social-icons";
import { useSelector } from "react-redux";

function ResponseSubmit(props) {
  const selectedArticleReducer = useSelector((store) => {
    return store.selectedArticleReducer;
  });

  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="response-shares">
        <div className="field">
          <div className="control">
            <label className="label">
              Share this article:{" "}
              <SocialIcon
                network="twitter"
                bgColor="transparent"
                fgColor="#83858b"
                style={{ height: 35, width: 35 }}
              />{" "}
              Twitter
            </label>
            <Field
              className="input"
              name="twitter"
              component="input"
              type="checkbox"
              placeholder="twitter"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="label">
              <SocialIcon
                network="facebook"
                bgColor="transparent"
                fgColor="#83858b"
                style={{ height: 35, width: 35 }}
              />
              Facebook
            </label>
            <Field
              className="input"
              name="facebook"
              component="input"
              type="checkbox"
              placeholder="facebook"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="label">
              <SocialIcon
                network="email"
                bgColor="transparent"
                fgColor="#83858b"
                style={{ height: 35, width: 35 }}
              />
              E-mail
            </label>
            <Field
              className="input"
              name="email"
              component="input"
              type="checkbox"
              placeholder="email"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="label">
              <SocialIcon
                network="whatsapp"
                bgColor="transparent"
                fgColor="#83858b"
                style={{ height: 35, width: 35 }}
              />
              WhatsApp
            </label>
            <Field
              className="input"
              name="whatsapp"
              component="input"
              type="checkbox"
              placeholder="whatsapp"
            />
          </div>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">trust</label>
          <Field
            className="input"
            name="trust"
            component="input"
            type="number"
            placeholder="trust"
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">quality</label>
          <Field
            className="input"
            name="quality"
            component="input"
            type="number"
            placeholder="quality"
          />
        </div>
      </div>

      <button type="submit" onClick={() => (window.location = "/articles")}>
        Submit
      </button>
    </form>
  );
}

ResponseSubmit = reduxForm({
  form: "response",
})(ResponseSubmit);

export default ResponseSubmit;
