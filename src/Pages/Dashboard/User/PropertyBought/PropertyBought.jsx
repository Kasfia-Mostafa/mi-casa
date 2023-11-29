import useOffered from "../../../../Hooks/useOffered";
import Bought from "./Bought";

const PropertyBought = () => {

const [propertyOffer] = useOffered()

  return (
    <div className="font-DM">
      <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        Property Bought
      </div>
      <div className="grid grid-cols-3 max-w-7xl mx-auto gap-5 my-20">
        {propertyOffer.map(offer => <Bought key={offer._id} offer={offer}></Bought>)}
      </div>
    </div>
  );
};

export default PropertyBought;