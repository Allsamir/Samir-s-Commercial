import { useLoaderData } from "react-router-dom"
import Slider from "../components/Slider";

const Home = () => {
  const estateData = useLoaderData();
  return (
    <div className="my-12">
    <Slider estates={estateData}/>
    </div>
  )
}

export default Home