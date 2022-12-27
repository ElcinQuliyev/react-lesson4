import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes";

export default function Navbar() {
  return (
    <nav className="nav">
      {/* to= rooter deisdirilmesi ucun  */}
      <NavLink to={ROUTES.home}>Ana Sehife</NavLink>
      <NavLink to={ROUTES.about}>Haqqinda</NavLink>
      <NavLink to={ROUTES.contact}>Elaqeler</NavLink>
    </nav>
  );
}
