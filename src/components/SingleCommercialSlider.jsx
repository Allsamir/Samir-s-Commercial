import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCommercialSlider = ({ estate }) => {
  console.log(estate);
  return (
    <div className="commercial-estate-details">
      <Link to={`/estate/${estate.id}`}>{estate.estate_title}</Link>
    </div>
  );
};

SingleCommercialSlider.propTypes = {
  estate: PropTypes.object.isRequired,
};

export default SingleCommercialSlider;
