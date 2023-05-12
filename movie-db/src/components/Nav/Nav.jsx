import React, { useState } from "react";
import "./nav.css";
import { Link, useParams } from "react-router-dom";

function Nav() {
  const [activeSearch, setActiveSearch] = useState(false);
  const id = useParams();

  const handleSearchToggle = () => {
      if (activeSearch) {
        setActiveSearch(false);
      } else {
        setActiveSearch(true);
      }
  }
  return (
    <main className="nav" id="nav">
      <div className="nav-logo">
        <img src="https://img.icons8.com/color/48/null/netflix.png" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to={`/movies`}>Movie</Link>
        <Link to="/series">Series</Link>
      </div>
        <div className="search-cont">
          <form className={`nav-search ${activeSearch ? 'active' : ''}`}>
          <input type="text" placeholder="Search" className={`nav-input ${activeSearch ? 'active' : ''}`}/>
          <img src="https://img.icons8.com/ios/50/null/search--v1.png" id='nav-search-img' onClick= {handleSearchToggle} />
        </form>
        </div>
     </main>
  );
}

export default Nav;
