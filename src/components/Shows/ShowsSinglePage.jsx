import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function ShowsSinglePage() {
  const [showDetails, setShowDetails] = useState();

    const paramsID = useParams();
    const showDetailsURL = `https://api.themoviedb.org/3/tv/${paramsID.id}?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US`
console.log(paramsID)
    const fetchMovieDetails = async () => {
      try {
        const data = await fetch(showDetailsURL);
        const resData = await data.json();
        setShowDetails(resData);
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
      <h1>{ showDetails && showDetails.name}</h1>
    </div>
  )
}

export default ShowsSinglePage