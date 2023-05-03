import React from "react";
import Nav from './components/Nav/Nav'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'
import Movie from './components/Movie/Movie'
import Series from './components/Series/Series'

import './App.css';


function App() {
  return (
    
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movie/>} />
        <Route path="/series" element={<Series/>} />
      </Routes>
    </div>
  );
}

export default App;
