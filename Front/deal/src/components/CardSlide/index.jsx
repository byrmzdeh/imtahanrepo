import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const CardSlide = () => {
  return (
    <div className='cardslide'>
         <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='photo'>
            <img width={300} src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo'>
            <img width={300} src="https://preview.colorlib.com/theme/dealers/images/product_2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='photo'>
            <img width={300} src="https://preview.colorlib.com/theme/dealers/images/product_3.jpg" alt="" />
        </SwiperSlide>
       
        
      </Swiper>
    </div>
  )
}

export default CardSlide