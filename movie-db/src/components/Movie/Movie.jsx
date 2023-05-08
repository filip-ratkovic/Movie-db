import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const movieURL = 
'https://api.themoviedb.org/3/movie/popular?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US&page=1'

function Movie() {
  const [movieData, setMovieData] = useState([]);
  const [apiData, setAPIData] = useState([]);
  

  const fetchMovieData = async () => {
    try {
      const data = await fetch(movieURL);
      const resData = await data.json();
      setMovieData(resData.results);
      setAPIData(resData)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    
   fetchMovieData()
  }, [])
  
console.log(movieData)

  const handlePageChange = (data) => {
    console.log(data.selected)
  }
  return (
   <main>
      {movieData.map((movie) => {
        return (
          <div className="movie-card">
            <h1>{movie.title}</h1>
          </div>
        )
      })}

      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={1000}
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