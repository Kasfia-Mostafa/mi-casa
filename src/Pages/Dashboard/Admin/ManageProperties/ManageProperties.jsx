import useNewAddProperty from "../../../../Hooks/useNewAddProperty";
import Verify from "../Verify/Verify";

const ManageProperties = () => {
  const [newPropertyItem] = useNewAddProperty();

  return (
    <div className="font-DM">
      <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        Manage Property
      </div>
      <div className="my-20 max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr className="text-base text-black">
                <th>#</th>
                <th>Property Title</th>
                <th>Property Location</th>
                <th>Agent Name</th>
                <th>Agent Email</th>
                <th>Price Range</th>
                <th className="text-center">Verify</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {newPropertyItem.map((property, index) => (
                <tr key={property._id}>
                  <th>{index + 1}</th>
                  <td>{property.property_title}</td>
                  <td>{property.property_location}</td>
                  <td>{property.agent_name}</td>
                  <td>{property.agent_email}</td>
                  <td>{property.property_price}</td>
                  <Verify key={property._id} property={property}></Verify>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProperties;
