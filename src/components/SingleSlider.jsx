import PropTypes from "prop-types";

const SingleSlider = ({ estate }) => {
  return (
    <div
      className={`bg-cover bg-center h-screen`}
      style={{ backgroundImage: `url(${estate.image})` }}
    >
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        {
          <h1 className="text-white font-popins lg:text-4xl md:text-2xl sm:text-xl font-bold px-4">
            {estate.estate_title}
          </h1>
        }
      </div>
    </div>
  );
};

SingleSlider.propTypes = {
  estate: PropTypes.object.isRequired,
};

export default SingleSlider;
