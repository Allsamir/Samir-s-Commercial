import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import EstateCard from "../components/EstateCard";
import "../App.css";

const Home = () => {
  const estateData = useLoaderData();
  return (
    <>
      <div className="mb-24 mt-8">
        <Slider estates={estateData} />
      </div>
      <div className="my-24 estate">
        <h1 className="text-black font-popins font-semibold text-4xl text-center">
          Estates
        </h1>
        <div className="my-8 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 px-4 place-items-center">
          {estateData.map((estate, key) => (
            <EstateCard key={key} estate={estate} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
