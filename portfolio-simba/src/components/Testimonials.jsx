import React from 'react'
import "./testimonials.css"
import IMG from '../assets/avatar1.jpg'
import IMG1 from '../assets/avatar2.jpg'
import IMG2 from '../assets/avatar3.jpg'
import IMG3 from '../assets/avatar4.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Testimonials = () => {
  return (
    <section className='sec'>
      <h5>Rewiev from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={IMG} alt="image1" />
          </div>
          <h5 className='client__name'>Name Here</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fugit repudiandae. Repellat atque ipsa saepe quia. Aut autem optio et eos inventore alias excepturi! Illo quasi dolorem repellat voluptatibus facere.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={IMG1} alt="image1" />
            
          </div>
          <h5 className='client__name'>Name Here</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fugit repudiandae. Repellat atque ipsa saepe quia. Aut autem optio et eos inventore alias excepturi! Illo quasi dolorem repellat voluptatibus facere.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={IMG2} alt="image1" />
            
          </div>
          <h5 className='client__name'>Name Here</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fugit repudiandae. Repellat atque ipsa saepe quia. Aut autem optio et eos inventore alias excepturi! Illo quasi dolorem repellat voluptatibus facere.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={IMG3} alt="image1" />
            
          </div>
          <h5 className='client__name'>Name Here</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fugit repudiandae. Repellat atque ipsa saepe quia. Aut autem optio et eos inventore alias excepturi! Illo quasi dolorem repellat voluptatibus facere.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials