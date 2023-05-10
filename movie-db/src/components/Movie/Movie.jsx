import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

import MovieCard from './MovieCard';
import "./movie.css";
import { Link } from 'react-router-dom';

const movieURL = 
'https://api.themoviedb.org/3/movie/popular?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US&page='

function Movie() {
  const [movieData, setMovieData] = useState([]);
  const [apiData, setAPIData] = useState([]);
  const [loading, setLoading] = useState(true);
  let currentPage = 1;

  const fetchMovieData = async (currentPage) => {
    try {
      const data = await fetch(movieURL + currentPage);
      const resData = await data.json();
      setMovieData(resData.results);
      setAPIData(resData)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    
   fetchMovieData()
  }, [])
  

  const handlePageChange = (data) => {
    fetchMovieData(data.selected+1)
  }

  if(loading) {
    return(
      <div>Loading</div>
    )
  }
  return (
   <main className="movie-main-container">
      <div className="movies-container">
      {movieData.map((movie) => {
        return (
          <Link to={`/movie/${movie.id}`} >
          <MovieCard movieData={movie} key={movie.id}/></Link>
        )
      })}
      </div>

     <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={100}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName='pagination justify-content-center'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        activeClassName='active'
      />
   </main>
  )
}

export default Movie