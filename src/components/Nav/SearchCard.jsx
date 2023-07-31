import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch as searchIcon } from "@fortawesome/free-solid-svg-icons";
import MovieCardSearch from "./MovieCardSearch";
import { useEffect } from "react";
import { useRef } from "react";

function SearchCard() {
  const [activeSearch, setActiveSearch] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [seacrhValue, setSearchValue] = useState("");
  const searchRef = useRef()
  const fetch = require("node-fetch");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzJkZGYwNmUzNjcyYzI3NzI4NmZlMjkwZTNiNGNlYyIsInN1YiI6IjY0MmQ0ZTJkMTU4Yzg1MDA3NzEwYmNlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zhpP8Z4sbofft-2YtsfnKTh2o71JfxXBY6EHcXHjLqM",
    },
  };

  const fetchMovieData = async (value) => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${value}&include_adult=false`,
      options
    )
      .then((res) => res.json())
      .then((json) =>{setMovieData(json.results)})
      .catch((err) => console.error("error:" + err));
  };

  const handleSearchToggle = () => {
    if (activeSearch) {
      setActiveSearch(false);
    } else {
      setActiveSearch(true);
    }
  };


  useEffect(()=> {
    let handler = (e)=> {
      if(!searchRef.current.contains(e.target)) {
       setActiveSearch(false)
      }
    }
    document.addEventListener("mousedown", handler )

    return ()=> {
      document.removeEventListener("mousedown", handler)
    }
  },[activeSearch])
  return (
    <div className="search-cont" onClick={()=> setSearchValue("")} ref={searchRef}>
      <form className={`nav-search ${activeSearch ? "active" : ""}`} 
       onChange={(e) => {
        e.preventDefault();
        fetchMovieData(seacrhValue);
      }}>
        <input
          type="text"
          placeholder="Search"
          value={seacrhValue}
          className={`nav-input ${activeSearch ? "active" : ""}`}
          onChange={(e) => {
            e.preventDefault();
            setSearchValue(e.target.value);
          }}
        />
        <FontAwesomeIcon
          icon={searchIcon}
          id="search-icon"
          onClick={handleSearchToggle}
        />
      </form>

      <div className={`search-movie ${activeSearch ? "active-search" : ""}`}
      onClick={handleSearchToggle}
      >
       {movieData.map((movie) => {
       return <MovieCardSearch movie = {movie} key={movie.id}/>
       })}
      </div>
    </div>
  );
}

export default SearchCard;
