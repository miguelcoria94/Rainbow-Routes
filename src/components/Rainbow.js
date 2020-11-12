import React from "react";
import { Route, Link, NavLink } from "react-router-dom";
import Red from './Red'
import Green from './Green';
import Blue from './Blue';
import Violet from './Violet';

const Rainbow = () => (
  <div>
    <h1>Rainbow Router!</h1>
    <NavLink to="/red" activeClassName="active">
      Red Only
    </NavLink>
    <NavLink to="/red/orange" activeClassName="active">
      Add Orange
    </NavLink>
    <NavLink to="/red/yellow" activeClassName="active">
      Add Yellow
    </NavLink>
    <NavLink to="/blue" activeClassName="active">
      Blue Only
    </NavLink>
    <NavLink to="/blue/indigo" activeClassName="active">
      Add Indigo
    </NavLink>
    <NavLink to="/green" activeClassName="active">
      Green Only
    </NavLink>
    <NavLink to="/violet" activeClassName="active">
      Violet Only
    </NavLink>

    <div id="rainbow">
      <Route path="/red" component={Red} />
      <Route path="/green" component={Green} />
      <Route path="/blue" component={Blue} />
      <Route path="/violet" component={Violet} />
    </div>
  </div>
);

export default Rainbow;
