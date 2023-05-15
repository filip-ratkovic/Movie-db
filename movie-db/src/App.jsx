import React, { useState } from "react";
import Nav from './components/Nav/Nav'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'
import Movie from './components/Movie/Movie'
import Series from './components/Series/Series'

import './App.css';
import MovieSingle from "./components/Movie/MovieSingle";


function App() {
  const [searchData, setSearchData] = useState(false)

  
  const getSearchData = (data) => {
      setSearchData(data)
  }

  return (
    
    <div className="App">
      <Nav getSearchData = {getSearchData} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movie searchData={searchData} />} />
        <Route path="/movie/:id" element={<MovieSingle/>} />
        <Route path="/series" element={<Series/>} />
      </Routes>
    </div>
  );
}

export default App;
