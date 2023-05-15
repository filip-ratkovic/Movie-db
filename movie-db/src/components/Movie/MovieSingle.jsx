import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './singleMovie.css'
function MovieSingle() {
  const [movieDetails, setMovieDetails] = useState();
  const [loading, setLoading] = useState(true);

    const imdbURL = 'https://www.imdb.com/title/'
    const imgURL = "https://image.tmdb.org/t/p/w500";
    const paramsID = useParams();
    const movieURL = `https://api.themoviedb.org/3/movie/${paramsID.id}?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US`

    const fetchMovieDetails = async () => {
      try {
        const data = await fetch(movieURL);
        const resData = await data.json();
        setMovieDetails(resData);
        console.log(resData)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      
     fetchMovieDetails()
    }, [])

    if(loading) {
      return <div>Loading...</div>
    }
  return (
    <div className="sm-conteiner">
        <div className="sm-main-cont" 
         style={
          {
            backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0) 0%,#17181c 80%, #17181c 100%), 
            url(${imgURL + movieDetails.backdrop_path})`
          }}>
          
        </div>
        <div className="sm-info-cont">
             <div className="sm-img-cont">
              <img src={imgURL + movieDetails.poster_path} alt={movieDetails.title + ' poster'} />
            </div>
            <div className="sm-text-cont">
            <h1>{movieDetails.title}</h1>

            </div>
           </div>
        <div className="test">
        </div>
    </div>
  )
}

export default MovieSingle