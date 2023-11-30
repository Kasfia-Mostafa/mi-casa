import useProperty from "../../../../Hooks/useProperty";
import AddedProperty from "./AddedProperty";
import { AuthContext } from "../../../../Layout/AuthProvider/AuthProvider";
import { useContext } from "react";

const AddedProperties = () => {
  const { user } = useContext(AuthContext);
  const [newPropertyItem] = useProperty();

  const filtering = newPropertyItem.filter(
    (verifying) => verifying.email === user.email
  );
  console.log(filtering);

  return (
    <div className="font-DM">
      <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        Added Properties
      </div>
      <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto my-20">
        {filtering.map((properties) => (
          <AddedProperty
            key={properties._id}
            properties={properties}
          ></AddedProperty>
        ))}
      </div>
    </div>
  );
};

export default AddedProperties;
