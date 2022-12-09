import React from 'react';
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true}}>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar One"/>
                     </div>
                     <h5 className='client__name'>John Doe</h5>
                    <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est provident dicta alias? Veniam eius sit tempora iure error similique molestiae repudiandae at aut nulla doloribus assumenda adipisci, quia quam porro?</small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR2} alt="Avatar Two"/>
                     </div>
                     <h5 className='client__name'>John Doe</h5>
                    <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est provident dicta alias? Veniam eius sit tempora iure error similique molestiae repudiandae at aut nulla doloribus assumenda adipisci, quia quam porro?</small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR3} alt="Avatar Three"/>
                     </div>
                     <h5 className='client__name'>John Doe</h5>
                    <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est provident dicta alias? Veniam eius sit tempora iure error similique molestiae repudiandae at aut nulla doloribus assumenda adipisci, quia quam porro?</small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR4} alt="Avatar Four"/>
                     </div>
                     <h5 className='client__name'>John Doe</h5>
                    <small className='client__review'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est provident dicta alias? Veniam eius sit tempora iure error similique molestiae repudiandae at aut nulla doloribus assumenda adipisci, quia quam porro?</small>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Testimonials;