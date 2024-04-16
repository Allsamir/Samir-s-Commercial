import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "../SwiperCommercial.css";
import PropTypes from "prop-types";
import SingleCommercialSlider from "./SingleCommercialSlider";

const CommercialSlider = ({ estatesData }) => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="commercial-slider"
    >
      {estatesData.map((estate, key) => (
        <SwiperSlide
          key={key}
          style={{ backgroundImage: `url(${estate.image})` }}
          className="bg-cover bg-center commercial-single-slide"
        >
          <SingleCommercialSlider estate={estate} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

CommercialSlider.propTypes = {
  estatesData: PropTypes.array.isRequired,
};

export default CommercialSlider;
