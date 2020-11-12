import React from "react";
import { Route, Link, NavLink } from "react-router-dom";
import Indigo from "./Indigo";

const Color = () => (
  <div>
    <h2 className="blue">blue</h2>
    {/* Links here */}

    <Route path="/blue/indigo" component={Indigo} />
  </div>
);

export default Color;
