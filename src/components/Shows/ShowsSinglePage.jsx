import { Star } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const imgURL = "https://image.tmdb.org/t/p/w500";

function ShowsSinglePage() {
  const [showDetails, setShowDetails] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const paramsID = useParams();
  const showDetailsURL = `https://api.themoviedb.org/3/tv/${paramsID.id}?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US`;
  console.log(paramsID);
  const fetchMovieDetails = async () => {
    try {
      const data = await fetch(showDetailsURL);
      const resData = await data.json();
      setShowDetails(resData);
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="sm-conteiner">
      <div
        className="sm-main-cont"
        style={{
          backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0) 0%,#17181c 80%, #17181c 100%), 
              url(${imgURL + showDetails?.backdrop_path})`,
        }}
      ></div>
      <div className="sm-info-cont">
        <div className="sm-img-cont">
          <img
            src={
              windowWidth > "600"
                ? imgURL + showDetails?.poster_path
                : imgURL + showDetails?.backdrop_path
            }
            alt={showDetails.name + " poster"}
          />
        </div>
        <div className="sm-text-cont">
          <h1>{showDetails.name}</h1>
          <h5 style={{ color: "#b9bec2" }}>
            {showDetails.tagline && `"` + showDetails.tagline + `"`}
          </h5>
          <div className="showed-durationNgenres">
            <p>Episodes: {showDetails.number_of_episodes}</p>
            <p className="poster-duration">|</p>
            <p>Seasons: {showDetails.number_of_seasons}</p>
          </div>

          <div className="movie-test">
            <div className="movie-year">
              <p>
                {showDetails.first_air_date?.toString().slice(0, 4)} -
                {`${
                  showDetails.in_production
                    ? ""
                    : " " + showDetails.last_air_date?.toString().slice(0, 4)
                }`}
              </p>
            </div>
            {windowWidth < 600 ? <p className="poster-duration">|</p> : null}
            <div className="showed-genres">
              {showDetails.genres?.map((genre) => {
                return (
                  <li>
                    <p>{genre.name}</p>
                  </li>
                );
              })}
            </div>
          </div>

          <div className="showed-rate">
            <p>
              <span>
                <Star style={{ color: "#faaf00", fontSize: "26px" }} />{" "}
              </span>
              {showDetails.vote_average?.toFixed(1)}
              <span id="showed-rate-10"> / 10</span>
            </p>
          </div>

          <div className="sm-overview">{showDetails.overview}</div>
          {/* <a href={`${imdbURL}${showDetails.imdb_id}`}></a> */}
          <div className="showed-buttons">
            <button id="watch-btn">Watch</button>
            <button id="add-btn">+ My List</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowsSinglePage;
