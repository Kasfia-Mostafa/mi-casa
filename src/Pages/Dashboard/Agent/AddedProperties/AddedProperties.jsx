import useNewAddProperty from "../../../../Hooks/useNewAddProperty";
import AddedProperty from "./AddedProperty";


const AddedProperties = () => {
  const [newPropertyItem] = useNewAddProperty();
  return (
    <div className="font-DM">
      <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        Added Properties
      </div>
      <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto my-20">
        {newPropertyItem.map((properties) => (
        <AddedProperty key={properties._id} properties={properties}></AddedProperty>
        ))}
      </div>
    </div>
  );
};

export default AddedProperties;
