import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper/modules';
import './styleCarrousel.css';

export function Carrousel({ imagen1, imagen2, imagen3, imagen4 }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                scrollbar={{
                    hide: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                modules={[Scrollbar, Autoplay]}
                className="mySwiper carrousel"
            >
                <SwiperSlide>
                    <img src={imagen1} alt="imagencarrousel" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imagen2} alt="imagencarrousel" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imagen3} alt="imagencarrousel" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imagen4} alt="imagencarrousel" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
