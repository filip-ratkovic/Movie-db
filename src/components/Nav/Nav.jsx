import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";

function Nav() {
 

  return (
    <main className="nav" id="nav">
      <div className="nav-logo">
        <img src="https://img.icons8.com/color/48/null/netflix.png" alt="netflix logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to={`/movies`}>Movie</Link>
        <Link to="/shows">Shows</Link>
      </div>
       <SearchCard/>
     </main>
  );
}

export default Nav;
