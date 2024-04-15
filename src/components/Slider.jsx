import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import PropTypes from "prop-types"
import 'swiper/css';
import 'swiper/css/pagination';
import SingleSlider from "./SingleSlider";
import "../App.css";

const Slider = ({estates}) => {
  return (
    <>
          <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
       {estates.map((estate, index) => <SwiperSlide key={index}><SingleSlider key={index} estate={estate}/></SwiperSlide>)}           
      </Swiper>
    </>
  )
}

Slider.propTypes = {
          estates: PropTypes.array.isRequired
}

export default Slider