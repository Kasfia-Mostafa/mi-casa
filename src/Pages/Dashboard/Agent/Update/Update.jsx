import { useContext } from "react";
import { AuthContext } from "../../../../Layout/AuthProvider/AuthProvider";


const Update = () => {
  const {user} = useContext(AuthContext)

  return (
    <div className="font-DM">
    <div className="m-3 text-6xl text-emerald-700 font-semibold ">
      Update Property
    </div>
    <div className="max-w-7xl mx-auto my-20 ">
      <div className="hero-content flex-col">
        <div className="card w-full shadow-xl bg-emerald-50 ">
          <form  className="card-body h-full">
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

export default Update;