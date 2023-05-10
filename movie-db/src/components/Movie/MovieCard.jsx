import React, { useState } from "react";

const imgURL = "https://image.tmdb.org/t/p/w500";

function MovieCard(props) {
  const [loading, setLoading] = useState(true);
  const movieData = props.movieData;

  if (loading) {
    <div>dadsa</div>;
  }
  return (
    <div className="movie-card-container">
      <div
        className="movie-card-img"
      >
        <img src={imgURL + movieData.poster_path} alt="" />
      </div>
      <div className="trending-card-info">
        <h1>{movieData.title}</h1>
        <div className="trending-card-info-year">
          <p>{movieData.release_date?.toString().slice(0, 4)}</p>
          <p id="trending-rate">{movieData.vote_average.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
