import { RiVerifiedBadgeFill } from "react-icons/ri";

const Bought = ({offer}) => {
 const {title,property_image,aName,price,location,status} = offer || []

 console.log(offer)

  return (
    <div>
    <div className="card w-96 bg-base-100 shadow-xl font-DM">
      <figure>
        <img className="h-80 w-full" src={property_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-pink-500 font-bold text-2xl">
          {title}
          <RiVerifiedBadgeFill className="text-green-500 text-xl" />
        </h2>
        <p>{location}</p>
        <div className="flex gap-3">
          <p>{aName}</p>
        </div>
        <p className="text-xl">$ {price}</p>

        <div className="card-actions justify-end">
          <div className="flex gap-3">
           
              <p
                className="badge bg-sky-200 p-5"
                type="submit"
              >
                {status}
              </p>
            {/* </Link> */}
            <button
              // onClick={handleDelete}
              className="badge badge-outline bg-sky-400 text-white p-5"
            >
             Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Bought;