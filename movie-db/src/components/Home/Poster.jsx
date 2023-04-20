import React, { useRef, useState } from 'react'
import './poster.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";



import { FreeMode, Navigation, Thumbs } from "swiper";

function Poster() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  
    return (
    <div className='poster-container'>
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={0}
        navigation={true}
        thumbs={{swiper:  thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="poster-swiper-container"
      >
        <SwiperSlide style={{
                  backgroundImage: `url(https://swiperjs.com/demos/images/nature-1.jpg)`,
                }}>
        </SwiperSlide>
        <SwiperSlide style={{
                  backgroundImage: `url(https://swiperjs.com/demos/images/nature-2.jpg)`,
                }}>
        </SwiperSlide>
        <SwiperSlide style={{
                  backgroundImage: `url(https://swiperjs.com/demos/images/nature-3.jpg)`,
                }}>
        </SwiperSlide>
        <SwiperSlide style={{
                  backgroundImage: `url(https://swiperjs.com/demos/images/nature-4.jpg)`,
                }}>
        </SwiperSlide>
       
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="small-swiper-cont"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Poster