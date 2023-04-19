import React, { useEffect, useState } from "react";
import "./trendingSlider.css";
import TrendingCard from "./TrendingCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const trendingURL =
  "https://api.themoviedb.org/3/trending/all/week?api_key=2c2ddf06e3672c277286fe290e3b4cec";
  const imgURL = "https://image.tmdb.org/t/p/w500";

function TrendingSlider() {
  const [trendingData, setTrendingData] = useState([]);

  const fetchTrendingData = async () => {
    try {
      const data = await fetch(trendingURL);
      const resData = await data.json();
      setTrendingData(resData.results);
      console.log(resData.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrendingData();
  }, []);

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {trendingData.map((movie) => {
          return (
            <SwiperSlide className="trendingCard">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <img src={imgURL + movie.poster_path} alt={movie.title} />
            </SwiperSlide>
          );
        })}

<span slot="container-start">Container Start</span>
  <span slot="container-end">Container End</span>
      </Swiper>
    </div>
  );
}

export default TrendingSlider;
