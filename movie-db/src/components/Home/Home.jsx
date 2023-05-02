import React, { useState } from 'react'
import './home.css'
import TrendingSlider from './TrendingSlider';
import Poster from './Poster';
import PopularSeries from './PopularSeries';

function Home() {
  const [trendingData, setTrendingData] = useState();


  return (
   <main>
    <Poster/>
      <TrendingSlider/>
      <PopularSeries/>
   </main>
  )
}

export default Home