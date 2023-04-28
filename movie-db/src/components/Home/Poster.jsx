import React, { useState, useEffect } from "react";
import "./poster.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import Loading from "../Loading/Loading";
import PosterCard from "./PosterCard";

const upcomingURL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US&page=1";
const imgURL = "https://image.tmdb.org/t/p/w500";
let counter = 0;
let counter2 = 0;

function Poster() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [upcomingData, setUpcomingData] = useState([]);
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    const fetchUpcomingData = async () => {
      try {
        const data = await fetch(upcomingURL);
        const resData = await data.json();
        setLoading(false);
        setUpcomingData(resData.results);
        console.log(resData.results);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };
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
             <PosterCard key={upcomingMovie.id} id={upcomingMovie.id} className='poster-card-cont'/>
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
          <img src={imgURL + "/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgURL + "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgURL + "/ewF3IlGscc7FjgGEPcQvZsAsgAW.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgURL + "/2lUYbD2C3XSuwqMUbDVDQuz9mqz.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgURL + "/jwMMQR69Xz9AYtX4u2uYJgfAAev.jpg"} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Poster;
