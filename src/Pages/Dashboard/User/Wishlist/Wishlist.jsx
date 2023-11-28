import Wish from "./Wish";
import useItemProperty from "../../../../Hooks/useItemProperty";

const Wishlist = () => {
  const [allProperties] = useItemProperty();

  return (
    <div className="font-DM">
      <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        Property Wishlist
      </div>
      <div>
        <div className="grid grid-cols-2 max-w-5xl mx-auto my-20 gap-5">
          {allProperties.map((wishingProperty) => (
            <Wish
              key={wishingProperty._id}
              wishingProperty={wishingProperty}
            ></Wish>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
