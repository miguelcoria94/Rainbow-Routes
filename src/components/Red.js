import React from "react";
import { Route, Link, NavLink } from "react-router-dom";
import Orange from './Orange';
import Yellow from './Yellow';

const Color = () => (
  <div>
    <h2 className="red">red</h2>
    {/* Links here */}

    <Route path="/red/orange" component={Orange} />
    <Route path="/red/yellow" component={Yellow} />
  </div>
);

export default Color;
