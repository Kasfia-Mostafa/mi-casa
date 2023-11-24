import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

const CardSwipper = () => {
  return (
    <>
      <div className="bg-sky-100">
        <div className="max-w-screen-sm mx-auto py-20">
        <h2 className="uppercase text-6xl font-DM text-orange-400  py-4">
              Need House Loan ?
            </h2>
          <div>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCube, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="w-[500px]"
                  src="https://i.ibb.co/wzsL9rC/OIP.jpg"
                  
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[500px]"
                  src="https://i.ibb.co/09XFvrf/OIP-3.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[500px]"
                  src="https://i.ibb.co/6Wby8dr/arcadiaheights1-2-1024x681.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[500px]"
                  src="https://i.ibb.co/h8rNZx6/OIP-7.jpg"
                  
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="mt-10 font-DM">
            
            <h2 className="uppercase text-3xl text-teal-500">
              Goliath National Bank
            </h2>
            <p className="text-gray-400">
              Get a loan for your dream home today! Flexible rates, quick
              approvals, and expert guidance for hassle-free homeowners.
            </p>
            <p className="text-gray-600">+8801564555756</p>
            <p className="text-gray-600">goliathnationalbank@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSwipper;
