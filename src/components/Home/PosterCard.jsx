import React, { useState, useEffect, axios } from "react";
import "./poster.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Star } from "@mui/icons-material";


const imgURL = "https://image.tmdb.org/t/p/w500";

function PosterCard(props) {
  const [movieDetails, setMovieDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const [readMore, setReadMore] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
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

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
}
    window.addEventListener('resize', handleResize)
  })


  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="poster-swiper-card-inner">
      <div
        className="poster-swiper-image"
        style={{
          backgroundImage: `url(${windowWidth > "800" ? imgURL+ movieDetails.poster_path : imgURL+ movieDetails.backdrop_path })`,
        }}
      ></div>
      <div className="showed-text-cont">
        <div className="showed-text-first-info">
        <h1  className="header-poster-card">{movieDetails.title}</h1>
        <div className="showed-durationNgenres" >
          <p >{hour}hr {minut} min</p>
          <p id = 'poster-duration'>|</p>
          <p>{movieDetails.release_date.slice(0, 4)}</p>

        </div>
        <div className="showed-genres">
            {movieDetails.genres.map((genre) => {
              return <li><p>{genre.name}</p></li>;
            })}
          </div>
       

        <div className="showed-rate">
            <p><span><Star style={{color:"#faaf00", fontSize:"26px"}}/>  </span>
            {movieDetails.vote_average.toFixed(1)}<span id="showed-rate-10"> / 10</span></p>
          </div>

        <div className="showed-overview">
          <p>
                    {readMore ? movieDetails.overview : `${movieDetails.overview.substring(0, 150)}`}
                   { movieDetails.overview.length<150 ? null : <button className="poster-read-more" onClick={() => {
                        setReadMore(!readMore);
                    }}>{readMore ? "... Show less" : "... Read more"}</button>}
                </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PosterCard;