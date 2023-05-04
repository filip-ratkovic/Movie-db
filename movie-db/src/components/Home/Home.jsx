import React, { useState } from 'react'
import './home.css'
import Poster from './Poster';
import TopRatedMovies from './TopRatedMovies';
import TrendingMovies from './TrendingMovies';
import PopularShows from './PopularShows';
import TopRatedShows from './TopRatedShows';

function Home() {
  const [trendingData, setTrendingData] = useState();


  return (
   <main>
      <Poster/>
      <TrendingMovies/>
      <PopularShows/>
      <TopRatedMovies/>
      <TopRatedShows/>
   </main>
  )
}

export default Home