import React from 'react'
import "./movieCard.css"
import { Link } from 'react-router-dom';

function MovieCardSearch(props) {
    const imgURL = "https://image.tmdb.org/t/p/w500";
    const movie = props.movie;
    
  return (
    <div className="trendingCard" key={movie.poster_path}>
    <Link to={`/movie/${movie.id}`}>
        <div
          className="trending-card-img"
          style={{
            backgroundImage: `url(${imgURL + movie.poster_path})`,
          }}
        ></div>
        <div className="movies-read-more">
            Read more
        </div>
        <div className="trending-card-info">
          <h1>{movie.title}</h1>
          <div className="trending-card-info-year">
            <p>{movie.release_date?.toString().slice(0, 4)}</p>
            <p id="trending-rate">{movie.vote_average?.toFixed(1)}</p>
          </div>
        </div>
        </Link>

      </div>
  )
}

export default MovieCardSearch