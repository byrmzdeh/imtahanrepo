import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SliderHome() {
  return (
    <div className='slider'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='photo'>
            <img src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png" alt="" />
            <div className="text">
                <h1>MADEWELL</h1>
                <p>Summer Collection</p>
                <p>1,499 <span>$1,999</span></p>
                <div className="buttons">
                    <button className='shop'>SHOP NOW</button>
                    <button className='now'>SHOP NOW</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='photo'>
           
            <div className="text">
                <h1>MADEWELL</h1>
                <p>Summer Collection</p>
                <p>1,499 <span>$1,999</span></p>
                <div className="buttons">
                    <button className='shop'>SHOP NOW</button>
                    <button className='now'>SHOP NOW</button>
                </div>
            </div>
            <img src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo'>
            <img src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png" alt="" />
            <div className="text">
                <h1>MADEWELL</h1>
                <p>Summer Collection</p>
                <p>1,499 <span>$1,999</span></p>
                <div className="buttons">
                    <button className='shop'>SHOP NOW</button>
                    <button className='now'>SHOP NOW</button>
                </div>
            </div>
           
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
