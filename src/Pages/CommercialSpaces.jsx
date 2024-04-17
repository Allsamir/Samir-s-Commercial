import { useLoaderData } from "react-router-dom";
import CommercialSlider from "../components/CommercialSlider";
import "../SwiperCommercial.css";
import EstateCard from "../components/EstateCard";

const CommercialSpaces = () => {
  const estatesData = useLoaderData();
  return (
    <>
      <div className="slide-container 2xl:my-32 xl:my-28 my-16">
        <div className="main-slider">
          <CommercialSlider estatesData={estatesData}></CommercialSlider>
        </div>
      </div>
      <div className="my-8 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 px-4 place-items-center">
        {estatesData.map((estate, index) => (
          <EstateCard key={index} estate={estate}></EstateCard>
        ))}
      </div>
    </>
  );
};

export default CommercialSpaces;
