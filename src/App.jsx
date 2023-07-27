import React, { useState } from "react";
import Nav from './components/Nav/Nav'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'
import Movie from './components/Movie/Movie'
import Shows from './components/Shows/Shows'

import './App.css';
import MovieSingle from "./components/Movie/MovieSingle";
import ShowsSinglePage from "./components/Shows/ShowsSinglePage";


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
        <Route path="/shows" element={<Shows/>} />
        <Route path="/shows/:id" element={<ShowsSinglePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
