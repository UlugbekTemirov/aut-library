import React, { useEffect } from "react";

import Cookies from "universal-cookie";

import logo from "../../images/ajoulogo.png";
import libraryLogo from "../../images/aut-library-new.png";

// core version + navigation, pagination modules:
import { SwiperSlide, Swiper } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay } from "swiper";

import "swiper/css/bundle";

import swiperimg1 from "../../images/aut-library.jpg";
import swiperimg2 from "../../images/aut-library-2.jpg";
import swiperimg3 from "../../images/aut-library-3.jpg";
import swiperimg4 from "../../images/aut-library-4.jpg";
import swiperimg5 from "../../images/aut-library-5.jpg";
import swiperimg6 from "../../images/aut-library-6.jpg";

const swiperimgs = [
  swiperimg1,
  swiperimg2,
  swiperimg3,
  swiperimg4,
  swiperimg5,
  swiperimg6,
];

const Home = (props) => {
  const { setJwt } = props;
  const cookie = new Cookies();
  const jwt = cookie.get("jwt", { path: "/" });

  useEffect(() => {
    setJwt(jwt);
  }, []);

  return (
    <>
      <div className="h-screen absolute top-0 left-0 w-full md:pt-[64px] pt-[56px] my-swiper ">
        <Swiper
          navigation
          autoplay
          loop
          modules={[Navigation, Autoplay]}
          className="h-full"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="flex items-center sm:justify-evenly sm:flex-row flex-col">
              <img
                className="md:w-[200px] sm:h-[200px] h-[150px] w-[150px] mb-10"
                src={logo}
                alt="logo"
              />
              <img
                className="w-[400px] sm:flex hidden"
                src={libraryLogo}
                alt="library"
              />
            </div>
            <h2 className="text-white md:text-7xl text-2xl  text-center">
              Toshkent shahridagi Ajou universiteti{" "}
              <span className="text-lime-500 font-extrabold">Kutubxonasi</span>{" "}
              websayti
            </h2>
          </div>
          {swiperimgs.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900/[0.6] absolute top-0 left-0 w-full h-full"></div>
              <img className="w-full h-full" src={img} alt="img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Home;
