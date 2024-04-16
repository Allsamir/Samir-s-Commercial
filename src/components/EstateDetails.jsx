import { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const estateDetails = useLoaderData();
  let { estateId } = useParams();
  const singleEstateDetails = estateDetails.find(
    (estateDetail) => estateDetail.id == estateId,
  );
  console.log(singleEstateDetails);

  useEffect(() => {
    document.title = `Samir's Commercial | ${singleEstateDetails.estate_title}`;
  }, [singleEstateDetails.estate_title]);

  return (
    <div className="md:w-4/5 w-full mx-auto pl-4 pr-4 my-8">
      <figure>
        <img
          src={singleEstateDetails.image}
          alt={singleEstateDetails.estate_title}
          className="w-full object-contain rounded-2xl"
        />
      </figure>
      <div className="estate-body font-popins text-black">
        <div className="flex justify-between flex-wrap items-center">
          <div className="my-4">
            <h2 className="font-semibold md:text-3xl text-2xl">
              {singleEstateDetails.estate_title}
            </h2>
            <p className="font-normal text-lg">
              {singleEstateDetails.location}
            </p>
          </div>
          <span className="font-bold text-base mr-2 mb-4">
            {singleEstateDetails.status}
          </span>
        </div>
        <p className="font-bold text-xl">{singleEstateDetails.price}</p>
        <div className="lg:w-4/5 md:w-full">
          <p className="font-normal text-base my-2">
            {singleEstateDetails.description}
          </p>
        </div>
        <div className="flex w-48 justify-between font-bold">
          <span>{singleEstateDetails.area}</span>
          <span>{singleEstateDetails.segment_name}</span>
        </div>
        <div className="facilites my-4">
          <span className="font-bold">Facilites:</span>
          <ul>
            {singleEstateDetails.facilities.map((facilite, key) => (
              <li key={key} className="font-medium">
                {facilite}
              </li>
            ))}
          </ul>
        </div>
        <Link to={"/"}>
          <button className="btn btn-outline text-black">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default EstateDetails;
