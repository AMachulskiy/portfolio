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
          <Cards title='Project 1' desc='138 commits' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../../img/xarizma-landing.jpg' alt='Project 1' />
        </SwiperSlide>
        <SwiperSlide>
          <Cards title='Project 2' desc='255 commits' />
        </SwiperSlide>
        <SwiperSlide>
          <Cards title='Project 3' desc='99 commits' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
