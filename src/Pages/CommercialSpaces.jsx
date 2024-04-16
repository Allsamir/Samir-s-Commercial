import { useLoaderData } from "react-router-dom";
import CommercialSlider from "../components/CommercialSlider";
import "../SwiperCommercial.css";

const CommercialSpaces = () => {
  const estatesData = useLoaderData();
  return (
    <div className="slide-container my-12">
      <div className="main-slider">
        <CommercialSlider estatesData={estatesData}></CommercialSlider>
      </div>
    </div>
  );
};

export default CommercialSpaces;
