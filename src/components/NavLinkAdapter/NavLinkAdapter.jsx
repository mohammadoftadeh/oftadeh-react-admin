import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkAdapter = React.forwardRef((props, ref) => (
  <NavLink innerRef={ref} {...props} />
));

export default NavLinkAdapter;
