import React, { Component } from "react";
import User from "../src/components/User";
import Articles from "./components/Articles";
import Response from "./components/Response";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route path exact="/" component={User} />
          <Route path="/articles" component={Articles} />
          <Route path="/response" component={Response} />
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}
export default App;
