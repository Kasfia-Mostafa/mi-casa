import { useContext } from "react";
import { AuthContext } from "../../../../Layout/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import useItemProperty from "../../../../Hooks/useItemProperty";

const AddProperty = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const [,refetch] = useItemProperty()

  const handleAddProperty = (event) => {
    event.preventDefault();
    const form = event.target;
    const property_image = form.property_image.value;
    const property_location = form.property_location.value;
    const property_title = form.property_title.value;
    const property_price = form.property_price.value;
    const agent_name = form.agent_name.value;
    const email = form.email.value;
    const agent_image = form.agent_image.value;
    const description = form.description.value;
    const status = form.status.value;

    const newAddProperty = {
      property_image,
      property_location,
      property_title,
      property_price,
      email,
      agent_name,
      agent_image,
      description,
      status
    };

    axiosSecure.post("/property", newAddProperty).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        refetch()
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Property added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="font-DM">
      <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        Add Property
      </div>
      <div className="max-w-7xl mx-auto my-20 ">
        <div className="hero-content flex-col">
          <div className="card w-full shadow-xl bg-emerald-50 ">
            <form onSubmit={handleAddProperty} className="card-body h-full">
              <div className=" grid grid-cols-2 gap-5">
                <div className="form-control grid">
                  <label className="label">
                    <span className="label-text text-lg">Property Title</span>
                  </label>
                  <input
                    name="property_title"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">
                      Property Location
                    </span>
                  </label>
                  <input
                    name="property_location"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Property Image</span>
                  </label>
                  <input
                    name="property_image"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Property Price</span>
                  </label>
                  <input
                    name="property_price"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Agent Name</span>
                  </label>
                  <input
                    defaultValue={user?.displayName}
                    name="agent_name"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Agent Email</span>
                  </label>
                  <input
                    defaultValue={user?.email}
                    name="email"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Agent Image</span>
                  </label>
                  <input
                    defaultValue={user?.photoURL}
                    name="agent_image"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    value="pending"
                    name="status"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                    hidden
                  />
                </div>
              </div>
              <div>
                <p className="text-lg">Description</p>
                <textarea
                name="description"
                  className="textarea textarea-bordered w-full text-gray-600 p-4 h-60"
                  placeholder="description"
                ></textarea>
              </div>
              <div className="flex justify-center gap-4">
                <div className="form-control mt-6 flex items-center">
                  <button className="btn w-40 text-white text-lg bg-gradient-to-r from-emerald-800 to-emerald-300">
                    Add Property
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
