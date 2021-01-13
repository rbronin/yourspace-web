import React from "react";
import { NavLink } from "react-router-dom";

/**
 *
 * @param {string} to - route link
 * @param {Node} children - jsx components || node
 *
 */

function RouteLink(props) {
  return (
    <NavLink style={{ textDecoration: "none" }} to={props.to}>
      {props.children}
    </NavLink>
  );
}

function SecureRoute(props) {
  console.log(props);
  return;
}

export { RouteLink, SecureRoute };
