import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import "./trendingSlider.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


const trendingURL = 
'https://api.themoviedb.org/3/movie/top_rated?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US&page=1'
const imgURL = "https://image.tmdb.org/t/p/w500";

function TopRatedMovies() {
  const [trendingData, setTrendingData] = useState([]);

  const fetchTrendingData = async () => {
    try {
      const data = await fetch(trendingURL);
      const resData = await data.json();
      setTrendingData(resData.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrendingData();
  }, []);

  return (
    <div className="slider-container">
      <h1 className="headerSwiperCont">
        Top Rated Movies
      </h1>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        className="swiper-container"
     
        breakpoints={{
          1150: {
            slidesPerView: 5,
            spaceBetween:50
          },
         
          965: {
            slidesPerView: 4,
            spaceBetween:50

          },
          690: {
            slidesPerView: 3,
            spaceBetween:50
          },
          440: {
            slidesPerView: 2,
            spaceBetween:20
          },
        }}
      >
        {trendingData.map((movie) => {
          return (

            
           <SwiperSlide className="trendingCard" key={movie.poster_path}>
            <Link to={`/movie/${movie.id}`} > 
              <div
                className="trending-card-img"
                style={{
                  backgroundImage: `url(${imgURL + movie.poster_path})`,
                }}
              ></div>
              <div className="trending-card-info">
                <h1>{movie.name}</h1>
               <div className="trending-card-info-year">
               <p>{movie.release_date?.toString().slice(0, 4)}</p>
               <p id='trending-rate'>{movie.vote_average.toFixed(1)}</p>
               </div>
              </div>
              </Link>
            </SwiperSlide>
       
          );
        })}
      </Swiper>
    </div>
  );
}

export default TopRatedMovies;
