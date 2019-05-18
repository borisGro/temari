import React from "react";
import { Route, Switch } from "react-router-dom";
import { homedir } from "os";




class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Shop} />
        <Route exact path="/" component={Contact} />
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
