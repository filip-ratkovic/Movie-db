import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function MovieSingle() {
  const [movieDetails, setMovieDetails] = useState();

    const paramsID = useParams();
    const movieURL = `https://api.themoviedb.org/3/movie/${paramsID.id}?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US`

    const fetchMovieDetails = async () => {
      try {
        const data = await fetch(movieURL);
        const resData = await data.json();
        setMovieDetails(resData);
        console.log(resData)
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      
     fetchMovieDetails()
    }, [])
  return (
    <div>
      <h1>{ movieDetails && movieDetails.title}</h1>

    </div>
  )
}

export default MovieSingle