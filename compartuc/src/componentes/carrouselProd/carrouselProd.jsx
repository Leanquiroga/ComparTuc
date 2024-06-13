import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styleCarrouselProd.css';
import { Navigation } from 'swiper/modules';
import { CardProducto } from '../cardProducto/cardProducto';

export function CarrouselProd() {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                loop={true}
                navigation={true}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    '@1.00': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper carrouselProd"
            >
                <CardProducto nombre="Zapatillas NIKE" precio={100000} descuento={20} />
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
}