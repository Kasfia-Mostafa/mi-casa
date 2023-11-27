import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { ImCancelCircle } from "react-icons/im";
import { RiVerifiedBadgeFill } from "react-icons/ri";


const ManageProperties = () => {

  const axiosSecure = useAxiosSecure()

  const { data: newAddedProperty = [] } = useQuery({
    queryKey: ["newAddedProperty"],
    queryFn: async () => {
      const res = await axiosSecure.get("/addProperty");
      return res.data;
    },
  });
  console.log(newAddedProperty)

  return (
    <div className="font-DM">
      <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        Manage Property
      </div>
      <div className="my-20 max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-base text-black">
                <th>#</th>
                <th>Property Title</th>
                <th>Property Location</th>
                <th>Agent Name</th>
                <th>Agent Email</th>
                <th>Price Range</th>
                <th>Verify</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {newAddedProperty.map((property, index) => (
                <tr key={property._id}>
                  <th>{index + 1}</th>
                  <td>{property.property_title}</td>
                  <td>{property.property_location}</td>
                  <td>{property.agent_name}</td>
                  <td>{property.agent_email}</td>
                  <td>{property.property_price}</td>
                  
                  <td>
                    {property.role === "agent" ? (
                      <button
                        // onClick={() => handleMakeAgent(user)}
                        className="btn btn-ghost  bg-emerald-700"
                      >
                        <RiVerifiedBadgeFill className="text-white"/>
                      </button>
                    ) : (
                      <button
                        // onClick={() => handleMakeAgent(user)}
                        className="btn btn-ghost  "
                      >
                        <RiVerifiedBadgeFill className="text-slate-600 text-xl" />
                      </button>
                    )}
                  </td>
                  <td>
                    {property.role === "agent" ? (
                      <button
                        // onClick={() => handleMakeAgent(user)}
                        className="btn btn-ghost  bg-emerald-700"
                      >
                        <RiVerifiedBadgeFill className="text-white"/>
                      </button>
                    ) : (
                      <button
                        // onClick={() => handleMakeAgent(user)}
                        className="btn btn-ghost  "
                      >
                        <ImCancelCircle className="text-red-500 text-xl" />
                      </button>
                    )}
                  </td>
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