import React, { useState, useEffect, axios } from "react";
import "./poster.css";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const imgURL = "https://image.tmdb.org/t/p/w500";
// const [thumbsSwiper, setThumbsSwiper] = useState(null);

function PosterCard(props) {
    const [movieDetails, setMovieDetails] = useState('');
    const [loading, setLoading] = useState(true);
    const id = props.id
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US`
    
    
      useEffect(() => {
        const fetchUpcomingDetailsData = async () => {
            try {
              const data = await fetch(URL);
              const resData = await data.json();
              setMovieDetails(resData);
              setLoading(false)
              console.log(resData)
            } catch (error) {
              console.log(error);
              setLoading(true)
            }
          };
        fetchUpcomingDetailsData();
      }, [props.id]);

      if(loading) {
        console.log('loading')
        return (
          <div>Loading...</div>
        )
      }
  return (
  <div className="poster-swiper-card-inner">
      
      <div className="showed-text-cont ${data.id}" id="test">
      <h1>{ movieDetails.title}</h1>
      <div className="showed-rateDuration" id="showed-rateDuration">
        <div className="showed-rate">
          <p>{ movieDetails.vote_average}</p>
        </div>
        <p>{ movieDetails.release_date.slice(0, 4)}</p>
        <p>{ movieDetails.runtime}</p>
      </div>

      <div className="showed-genres">
       {movieDetails.genres.map((genre) => {
        return (
          <li>{genre.name}</li>
        )
       })}
      

      </div>

      <div className="showed-overview">{ movieDetails.overview}</div>

      <div className="showed-buttons">
        <button id="watch-btn">
          Watch 
        </button>
        <button id="add-btn">
          Add
        </button>
      </div>
    </div>
    
  </div>
  )
}

export default PosterCard