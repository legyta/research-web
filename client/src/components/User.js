import React from "react";
import { useForm } from "react-hook-form";
import userHelper from "../helper/userHelper";
import "../stylesheets/user.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function User(props) {
  const { register, handleSubmit } = useForm();

  function onSubmit(sendingtoServer, e) {
    e.preventDefault();

    userHelper(sendingtoServer).then((receivedfromServer) => {
      props.saveUser(receivedfromServer);
    });
  }

  return (
    <main className="user-main">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Please answer these to start experiment</h1>

        <div className="user-form">
          <label className="user-age" htmlFor="age">
            Age
          </label>
          <select
            id="age"
            name="age"
            ref={register({ required: true })}
            type="age"
          >
            <option value="select"></option>
            <option value="24">18-24</option>
            <option value="34">25-34</option>
            <option value="44">35-44</option>
            <option value="54">45-54</option>
            <option value="64">55-64</option>
            <option value="74">65-74</option>
            <option value="75">74+</option>
          </select>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            ref={register({ required: true })}
            type="text"
          >
            <option value="select"></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nosay">Prefer not to say</option>
          </select>
          <label htmlFor="education">Education level</label>
          <select
            id="education"
            name="education"
            ref={register({ required: true })}
            type="text"
          >
            <option value="select"></option>
            <option value="havo">HAVO/VMBO/VWO</option>
            <option value="mbo">MBO</option>
            <option value="hbo">HBO/WO</option>
            <option value="master">Master's</option>
            <option value="doc">Doctorate</option>
          </select>
          <button> Start</button>
          {/* <button type="submit">
            <Link to="/articles">Start</Link>
          </button> */}
        </div>
      </form>
    </main>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveUser: (user) => dispatch({ type: "SAVE_USER", user: user }),
});

export default connect(null, mapDispatchToProps)(User);
