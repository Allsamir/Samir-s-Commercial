import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCommercialSlider = ({ estate }) => {
  return (
    <div className="commercial-estate-details">
      <Link to={`/estate/${estate.id}`}>
        <h2 className="lg:text-2xl md:text-xl sm:text-lg text-center px-4">
          {estate.estate_title}
        </h2>
      </Link>
    </div>
  );
};

SingleCommercialSlider.propTypes = {
  estate: PropTypes.object.isRequired,
};

export default SingleCommercialSlider;
