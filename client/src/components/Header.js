import React from "react";
import header from "../stylesheets/header.css";

function Header() {
  return (
    <div className="header-top">
      <ul>
        <li>Overview |</li>
        <li>Inland |</li>
        <li>Abroad |</li>
        <li>Regional news |</li>
        <li>Politics |</li>
        <li className="header-economy">Economy</li>
        <li>| Royal family |</li>
        <li>Tech |</li>
        <li>Culture & Media |</li>
        <li>Remarkable |</li>
        <input className="header-search" type="text" placeholder="Search 🔍" />
      </ul>
      <div className="header-news">
        <h1 className="header-h1">News</h1>
        <h2 className="header-h2">⦾ Economy</h2>
      </div>
    </div>
  );
}

export default Header;
