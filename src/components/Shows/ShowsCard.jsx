import React, { useState, useEffect } from "react";

const imgURL = "https://image.tmdb.org/t/p/w500";

function ShowsCard(props) {
  const [showsDetails, setShowDetails] = useState();
  const [loading, setLoading] = useState(true);
  const showDetailsURL = `https://api.themoviedb.org/3/tv/${props.showData.id}?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US`

    
  const fetchShowsDetailData = async () => {
    try {
        const data = await fetch(showDetailsURL);
        const resData = await data.json();
        setShowDetails(resData);
        setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchShowsDetailData()
   }, [])
  

   if(loading) {
    return <div></div>
   }
  return (
    <div className="movie-card-container">
      <div
        className="movie-card-img"
      >
        <img src={imgURL + showsDetails.poster_path} alt="" />
        <div className="movies-read-more">
        <p>Read more </p>
      </div>
      </div>
      <div className="trending-card-info">
        <h1>{showsDetails.name}</h1>
        <div className="trending-card-info-year">
          <p>{showsDetails.first_air_date?.toString().slice(0, 4)} - 
          
          {`${showsDetails.in_production ? '' : ' '+ showsDetails.last_air_date?.toString().slice(0, 4)}`}</p>
          <p id="trending-rate">{showsDetails.vote_average.toFixed(1)}</p>
        </div>
      </div>
     
    </div>
  );
}

export default ShowsCard;


// import React, { useState } from "react";

// const imgURL = "https://image.tmdb.org/t/p/w500";

// function ShowsCard(props) {
//   const showData = props.showData;

//   return (
//     <div className="movie-card-container">
//       <div
//         className="movie-card-img"
//       >
//         <img src={imgURL + showData.poster_path} alt="" />
//         <div className="movies-read-more">
//         <p>Read more </p>
//       </div>
//       </div>
//       <div className="trending-card-info">
//         <h1>{showData.name}</h1>
//         <div className="trending-card-info-year">
//           <p>{showData.first_air_date?.toString().slice(0, 4)}</p>
//           <p id="trending-rate">{showData.vote_average.toFixed(1)}</p>
//         </div>
//       </div>
     
//     </div>
//   );
// }

// export default ShowsCard;

