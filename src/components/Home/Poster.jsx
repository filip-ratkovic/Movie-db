import React, { useState, useEffect } from "react";
import "./poster.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import PosterCard from "./PosterCard";
const upcomingURL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=2c2ddf06e3672c277286fe290e3b4cec&language=en-US&page=1";
const imgURL = "https://image.tmdb.org/t/p/w500";

function Poster() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [upcomingData, setUpcomingData] = useState([]);
  const [smallSliderPhoto, setSmallSliderPhoto] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let counter = 0

  useEffect(() => {
    const fetchUpcomingData = async () => {
      try {
        const data = await fetch(upcomingURL);
        const resData = await data.json();
        setUpcomingData(resData.results);
        const smallPhotosArr = [];
        for (let i = 0; i < 5; i++) {
          smallPhotosArr.push(resData.results[i].poster_path);
        }
        setSmallSliderPhoto(smallPhotosArr);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUpcomingData();
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
}
    window.addEventListener('resize', handleResize)
  })


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
             counter ++
              if (counter < 6) {
            return (
              <SwiperSlide
              className="poster-swiper-card"
              style={{
                backgroundImage: `url(${
                  windowWidth < "900" ? imgURL+ upcomingMovie.poster_path : imgURL+ upcomingMovie.backdrop_path
                })`,
              }}
            >
             <PosterCard key={upcomingMovie.id} id={upcomingMovie.id} className='poster-card-cont'/>             
            </SwiperSlide>
            );
          }
        }
        ) }

      </Swiper>
      <p className="header-small-cont">Upcoming Movies</p>
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

        <SwiperSlide className="small-swiper-card">
          <img src={imgURL + smallSliderPhoto[0]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="small-swiper-card">
          <img src={imgURL + smallSliderPhoto[1]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="small-swiper-card">
          <img src={imgURL + smallSliderPhoto[2]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="small-swiper-card">
          <img src={imgURL + smallSliderPhoto[3]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="small-swiper-card">
          <img src={imgURL + smallSliderPhoto[4]} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Poster;
