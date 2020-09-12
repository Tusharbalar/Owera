import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Dashboard from '../Views/Dashboard/Dashboard';
import Services from '../Views/Services/Services';
import Home from '../Views/Home/Home.js';

const CreateRoutes = () => {
  return (
    <Switch>
       <Route exact path="/" component={Home}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/services" component={Services}/>
    </Switch>
  );
};
export default CreateRoutes;
