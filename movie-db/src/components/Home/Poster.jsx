import React, { useState, useEffect } from "react";
import "./poster.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

const upcomingURL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US&page=1";
const imgURL = "https://image.tmdb.org/t/p/w500";
let counter = 0;
let counter2 = 0;

function Poster() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [upcomingData, setUpcomingData] = useState([]);

  const fetchUpcomingData = async () => {
    try {
      const data = await fetch(upcomingURL);
      const resData = await data.json();
      setUpcomingData(resData.results);
      console.log(resData.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUpcomingData();
  }, []);

  return (
    <div className="poster-container">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="poster-swiper-container"
      >
        {upcomingData.map((upcomingMovie) => {
          counter++;
          if (counter < 6) {
            return (
              <SwiperSlide
                className="poster-swiper-card"
                style={{
                  backgroundImage: `url(${imgURL + upcomingMovie.poster_path})`,
                }}
              >
                <div className="poster-swiper-card-inner"></div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="small-swiper-cont mySwiper"
      >
        <SwiperSlide>
          <img src={imgURL + upcomingData[0].poster_path} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgURL + upcomingData[1].poster_path} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgURL + upcomingData[2].poster_path} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgURL + upcomingData[3].poster_path} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgURL + upcomingData[4].poster_path} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Poster;
