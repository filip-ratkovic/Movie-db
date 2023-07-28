import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

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
        {/* <div className="search-cont">
          <form className={`nav-search ${activeSearch ? 'active' : ''}`}>
          <input type="text" placeholder="Search" className={`nav-input ${activeSearch ? 'active' : ''}`}
          onSubmit={((event)=> {
              getSearchData(event.target.value)
          })} 
          />
          <img src="https://img.icons8.com/ios/50/null/search--v1.png" id='nav-search-img' alt="Search-icon"
           onClick= {handleSearchToggle} />
        </form>
        </div> */}
     </main>
  );
}

export default Nav;
