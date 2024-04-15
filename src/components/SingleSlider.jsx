import PropTypes from "prop-types"


const SingleSlider = ({estate}) => {
          console.log(estate)
  return (
    <div className={`bg-cover bg-center h-screen`} style={{backgroundImage: `url(${estate.image})`}}>
          <div style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}} className="w-full h-full flex flex-col justify-center items-center">
          {<h1 className="text-white font-popins text-4xl font-bold">{estate.estate_title}</h1> }
          </div>
    </div>
  )
}

SingleSlider.propTypes = {
          estate: PropTypes.object.isRequired
}

export default SingleSlider