import React, { Component } from "react";

const NaviBar = ({totalCounters}) =>{
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
  Navbar <span className="baged badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NaviBar;
