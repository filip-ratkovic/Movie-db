import React, { useState } from 'react'
import './home.css'
import TrendingSlider from './TrendingSlider';
import Poster from './Poster';

function Home() {
  const [trendingData, setTrendingData] = useState();


  return (
   <main>
    <Poster/>
      <TrendingSlider/>
   </main>
  )
}

export default Home