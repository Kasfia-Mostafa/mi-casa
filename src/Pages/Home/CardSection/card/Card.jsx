// import { RiVerifiedBadgeFill } from "react-icons/ri";
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ plot }) => {
  const {
    property_image,
    property_price,
    property_title,
    _id,
  } = plot || [];

  return (
    <div>
      <div className="row font-DM">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card">
            <div className="cover item-a">
							<img src={property_image} className="absolute h-80 w-full" alt="" />
              <h1>{property_title}</h1>
              <span className="price">${property_price}</span>
              <div className="card-back">
               <Link to={`allProperties/${_id}`}><p>View detail</p></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
