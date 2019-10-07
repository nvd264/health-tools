import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Configs
import routes from './configs/routes';

function App() {
  return (
      <Router>
        <Switch>
          {routes.map((r, index) => {
            const Component = r.component;
            return <Route exact={r.path === '/'} key={index} path={r.path} component={Component} />
          })}
        </Switch>
      </Router>
  );
}

export default App;
