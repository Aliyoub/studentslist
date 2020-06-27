import React from "react";
import { Route, Switch } from "react-router-dom";
import StudentsList from "./pages/front/StudentsList";


const Routes = () => {
  return (
    <Switch>

      {/* <Route path="/login" component={Login} /> */}
      <Route exact path="/etudiants" component={StudentsList} />
    </Switch>
  );
};
export default Routes;
