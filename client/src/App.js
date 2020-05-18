import React, { Component } from "react";
//import LandingPage from "../src/components/LandingPage";
import Articles from "./components/Articles";
import Response from "./components/Response";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route path exact="/" component={LandingPage} />
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
