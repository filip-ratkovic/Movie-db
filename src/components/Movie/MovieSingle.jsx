import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singleMovie.css";
import { Star } from "@mui/icons-material";

function MovieSingle() {
  const [movieDetails, setMovieDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const imdbURL = "https://www.imdb.com/title/";
  const imgURL = "https://image.tmdb.org/t/p/w500";
  const paramsID = useParams();
  const movieURL = `https://api.themoviedb.org/3/movie/${paramsID.id}?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US`;

  const fetchMovieDetails = async () => {
    try {
      const data = await fetch(movieURL);
      const resData = await data.json();
      setMovieDetails(resData);
      console.log(resData, "resdata");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  let hour = 0;
  let minut = 0;
  const handleRunTime = () => {
    hour = Math.floor(movieDetails?.runtime / 60);
    minut = movieDetails?.runtime - 60 * hour;
  };

  handleRunTime();

  useEffect(() => {
    fetchMovieDetails();
  }, [paramsID]);

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
    <div className="sm-conteiner">
      <div
        className="sm-main-cont"
        style={{
          backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0) 0%,#17181c 80%, #17181c 100%), 
            url(${imgURL + movieDetails.backdrop_path})`,
        }}
      ></div>
      <div className="sm-info-cont">
        <div className="sm-img-cont">
          <img
            src={windowWidth > "600" ? imgURL+ movieDetails.poster_path : imgURL+ movieDetails.backdrop_path }
            alt={movieDetails.title + " poster"}
          />
        </div>
        <div className="sm-text-cont">
          <h1>{movieDetails.title}</h1>
          <h5 style={{ color: "#b9bec2" }}>
            "{movieDetails.tagline && movieDetails.tagline}"
          </h5>
         

          <div className="showed-rate">
            <p>
              <span>
                <Star style={{ color: "#faaf00", fontSize: "26px" }} />{" "}
              </span>
              {movieDetails.vote_average?.toFixed(1)}
              <span id="showed-rate-10"> / 10</span>
            </p>
          </div>
          {/* <div className="company-cont">
            <p style={{marginBottom:"0"}}>Production Companies:</p>
            <div className="company-name">
          {movieDetails.production_companies.map((company, index) => {
          return  <p> {company.name} {index < movieDetails.production_companies.length-1? "," : "."} </p>
          })}
            </div>
          </div> */}
          <div className="sm-overview">{movieDetails.overview}</div>
          <a href={`${imdbURL}${movieDetails.imdb_id}`}></a>
          <div className="showed-buttons">
            <button id="watch-btn">Watch</button>
            <button id="add-btn">+ My List</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSingle;
