import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import EstateCard from "../components/EstateCard";
import "../App.css";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  const estateData = useLoaderData();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        className="mb-24 mt-8"
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
        data-aos-offset="200"
      >
        <Slider estates={estateData} />
      </div>
      <div className="my-24 estate">
        <h1 className="text-black font-popins font-semibold text-4xl text-center animate-bounce">
          Estates
        </h1>
        <div
          className="my-8 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 px-4 place-items-center"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          {estateData.map((estate, key) => (
            <EstateCard key={key} estate={estate} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
