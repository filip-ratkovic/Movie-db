import React, { useState } from 'react'
import './home.css'
import TrendingSlider from './TrendingSlider';

function Home() {
  const [trendingData, setTrendingData] = useState();


  return (
   <main>
      <TrendingSlider/>
   </main>
  )
}

export default Home