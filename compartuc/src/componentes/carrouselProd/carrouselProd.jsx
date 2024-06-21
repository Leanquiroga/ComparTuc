import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styleCarrouselProd.css';
import { Navigation } from 'swiper/modules';
import { CardProducto } from '../cardProducto/cardProducto';

export function CarrouselProd({ prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8 }) {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                loop={true}
                navigation={true}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.50': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '@1.00': {
                        slidesPerView: 3,
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
                <SwiperSlide className='contenedorProdCarrousel'>{prod1}</SwiperSlide>
                <SwiperSlide className='contenedorProdCarrousel'>{prod3}</SwiperSlide>
                <SwiperSlide className='contenedorProdCarrousel'>{prod2}</SwiperSlide>
                <SwiperSlide className='contenedorProdCarrousel'>{prod4}</SwiperSlide>
                <SwiperSlide className='contenedorProdCarrousel'>{prod5}</SwiperSlide>
                <SwiperSlide className='contenedorProdCarrousel'>{prod6}</SwiperSlide>
                <SwiperSlide className='contenedorProdCarrousel'>{prod7}</SwiperSlide>
                <SwiperSlide className='contenedorProdCarrousel'>{prod8}</SwiperSlide>
            </Swiper>
        </>
    );
}