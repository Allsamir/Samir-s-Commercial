import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "animate.css";

const EstateCard = ({ estate }) => {
  return (
    <div className="card bg-white text-black shadow-xl">
      <figure className="">
        <img src={estate.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between flex-wrap">
          <div className="font-popins font-semibold">
            <h2 className="text-xl">{estate.estate_title}</h2>
            <p className="py-2 text-sm">{estate.location}</p>
          </div>
          <h2 className="text-lg font-medium">{estate.price}</h2>
        </div>
        <div className="w-48 flex justify-between my-2">
          <span>{estate.area}</span>
          <span>{estate.segment_name}</span>
        </div>
        <div className="card-actions mt-2">
          <Link to={`/estate/${estate.id}`}>
            <button className="btn btn-outline text-black animate-pulse">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

EstateCard.propTypes = {
  estate: PropTypes.object.isRequired,
};

export default EstateCard;
