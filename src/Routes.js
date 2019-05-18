import React from "react";
import { Route, Switch } from "react-router-dom";
import AddonsNavPage from "./pages/AddonsNavPage";
import AdvancedNavPage from "./pages/AdvancedNavPage";
import HomePage from "./pages/HomePage";



class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/addons" component={AddonsNavPage} />
        <Route exact path="/advanced" component={AdvancedNavPage} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
