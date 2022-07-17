import { ReactFC } from '@src/interfaces/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-coverflow'
import './slider.scss'

import { EffectFade, EffectCoverflow, Autoplay } from 'swiper'
import React from 'react'
import Cards from '../cards/cards'

const Slider: ReactFC = () => {
  return (
    <div className='slider__container'>
      <Swiper
        // install Swiper modules
        spaceBetween={10}
        effect='coverflow'
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, EffectCoverflow, Autoplay]}
      >
        <SwiperSlide>
          <Cards number={1} title='_landing page' commits={138} />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../../img/xarizma-landing.jpg' alt='Project 1' />
        </SwiperSlide>
        <SwiperSlide>
          <Cards number={2} title='_portfolio' commits={245} />
        </SwiperSlide>
        <SwiperSlide>
          <Cards number={3} title='_marketplace' commits={597} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
