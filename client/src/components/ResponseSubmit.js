import React from "react";
import { Field, reduxForm } from "redux-form";
import Slider from "rc-slider/lib/Slider";
import "rc-slider/assets/index.css";
import { SocialIcon } from "react-social-icons";
import responseSubmit from "../stylesheets/responseSubmit.css";
import { Link, withRouter } from "react-router-dom";

const ReduxSlider = (props) => {
  const {
    input: { value, onChange },
  } = props;
  return (
    <Slider
      value={props.input.value}
      onChange={props.input.onChange}
      {...props}
    />
  );
};

export const ResponseSubmit = (props) => {
  const { handleSubmit } = props;

  const rangeProps = {
    pushable: true,
    allowCross: false,
    min: 0,
    max: 100,
    step: 1,
  };
  return (
    <section className="response-submit-container">
      <form onSubmit={handleSubmit} className="responseSubmit-form">
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

        <div className="trust-field">
          <div className="control">
            <label className="label-trust">
              How much do you trust this news story?
            </label>
            <Field name="trust" component={ReduxSlider} props={rangeProps} />
          </div>
          <div className="trust-little-much">
            <div className="trust-little">
              <label className="label">very little</label>
            </div>
            <div className="trust-much">
              <label className="label">very much</label>
            </div>
          </div>
        </div>

        <div className="trust-field">
          <div className="control">
            <label className="label-quality">
              What do you think of this article’s quality?
            </label>
            <Field name="quality" component={ReduxSlider} props={rangeProps} />
          </div>
          <div className="trust-little-much">
            <div className="trust-little">
              <label className="label">very poor</label>
            </div>
            <div className="trust-much">
              <label className="label">very good</label>
            </div>
          </div>
        </div>
        <button>Submit</button>

        {/* <button>
          <Link to="/articles">Submit</Link>
        </button> */}
      </form>
    </section>
  );
};

export default reduxForm({
  form: "response",
})(withRouter(ResponseSubmit));
