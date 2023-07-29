import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch as searchIcon } from "@fortawesome/free-solid-svg-icons";
function Nav() {
  // const [activeSearch, setActiveSearch] = useState(false);

  // const handleSearchToggle = () => {
  //     if (activeSearch) {
  //       setActiveSearch(false);
  //     } else {
  //       setActiveSearch(true);
  //     }
  // }

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
        <div className="search-cont">
        <FontAwesomeIcon icon={searchIcon} style={{fontSize:"20px", color:"grey"}}/>
        </div>
     </main>
  );
}

export default Nav;
