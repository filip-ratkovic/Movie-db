import React, { useState, useEffect, axios } from "react";
import "./poster.css";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const imgURL = "https://image.tmdb.org/t/p/w500";

function PosterCard(props) {
  const [movieDetails, setMovieDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const id = props.id;
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US`;

  useEffect(() => {
    const fetchUpcomingDetailsData = async () => {
      try {
        const data = await fetch(URL);
        const resData = await data.json();
        setMovieDetails(resData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };
    fetchUpcomingDetailsData();
  }, [props.id]);

  let hour = 0; 
  let minut = 0; 
  const handleRunTime  = () => {
      

      hour = Math.floor(movieDetails.runtime / 60);
      minut = movieDetails.runtime - (60 * hour)
  }

  handleRunTime()


  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="poster-swiper-card-inner">
      <div
        className="poster-swiper-image"
        style={{
          backgroundImage: `url(${imgURL + movieDetails.poster_path})`,
        }}
      ></div>
      <div className="showed-text-cont">
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.release_date.slice(0, 4)}</p>
        <div className="showed-durationNgenres" >
          <p >{hour}hr {minut} min</p>
          <p id = 'poster-duration'>|</p>
          <div className="showed-genres">
            {movieDetails.genres.map((genre) => {
              return <li><p>{genre.name}</p></li>;
            })}
          </div>
        </div>

        <div className="showed-rate">
            <p>{movieDetails.vote_average.toFixed(1)}</p>
          </div>

        <div className="showed-overview">{movieDetails.overview}</div>
        <div className="showed-buttons">
          <button id="watch-btn">Watch</button>
          <button id="add-btn">Add</button>
        </div>
      </div>
    </div>
  );
}

export default PosterCard;
