import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import './styleCarrousel.css';

export function Carrousel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSXizXXqCzls5RFMeHTL0OAYHhexjSHgljsjqkxmtJbEmrrBZIXqElnTCDhWxFxovWr2qvzoc3BTcPSdAI-QZ9m2jT0Apcw3n9CKqF3XQ" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg?wp=1&w=170&h=170" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>

            </Swiper>
        </>
    );
}
