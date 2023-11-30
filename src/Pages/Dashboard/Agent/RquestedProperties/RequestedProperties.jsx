import { useState } from "react";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Accepted from "../../User/Accepted/Accepted";

const RequestedProperties = () => {
  const axiosSecure = useAxiosSecure();
  const [accepted, setAccepted] = useState([]);

  axiosSecure.get(`/offered`)
  .then((res) => setAccepted(res.data));

  return (
    <div className="font-DM">
      <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        Requested Properties
      </div>
      <div className="my-20 max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr className="text-lg text-blue-400">
                <th>#</th>
                <th>Property Title</th>
                <th>Property Location</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Offer Price</th>
                <th>Status</th>
                <th className="text-center">Confirmation</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {accepted.map((property, index) => (
                <tr key={property._id}>
                  <th>{index + 1}</th>
                  <td>{property.title}</td>
                  <td>{property.location}</td>
                  <td>{property.bName}</td>
                  <td>{property.bEmail}</td>
                  <td>{property.price}</td>
                  <td className="text-green-500">{property.status}</td>
                  <Accepted key={property._id} property={property}></Accepted>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestedProperties;
