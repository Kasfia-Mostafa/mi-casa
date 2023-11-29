import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../Layout/AuthProvider/AuthProvider";
import swal from "sweetalert";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";

const Offered = () => {
  const { user } = useContext(AuthContext);
  const OfferedProperty = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const { property_location, property_price, property_title, agent_name ,property_image} =
    OfferedProperty || [];

  const handleOfferedPrice = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const location = form.location.value;
    const aName = form.aName.value;
    const price = form.price.value;
    const bName = form.bName.value;
    const bEmail = form.bEmail.value;
    const date = form.date.value;
    const status = form.status.value;
    const property_image = form.property_image.value;

    const offerInfo = {
      title,
      location,
      aName,
      price,
      bName,
      bEmail,
      date,
      status,
      property_image
    };
    if (
      parseInt(price) >= parseInt(500000) &&
      parseInt(price) < parseInt(3000000)
    ) {
      swal("Thank You!", "Offer has sent to the agent", "success");
    } else {
      swal("Sorry", "You have to higher the price range", "error");
    }

    axiosSecure
      .post("/offered", offerInfo)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="font-DM h-[120vh]">
      <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        Offered Property
      </div>
      <div className="hero my-40">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="card w-full shadow-xl bg-emerald-50 ">
            <form onSubmit={handleOfferedPrice} className="card-body h-full">
              <div className=" grid grid-cols-3 gap-5">
                <div className="form-control grid">
                  <label className="label">
                    <span className="label-text text-lg">Property Name</span>
                  </label>
                  <input
                    name="title"
                    defaultValue={property_title}
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
                    name="location"
                    defaultValue={property_location}
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
                    name="aName"
                    defaultValue={agent_name}
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Offered Price</span>
                  </label>
                  <input
                    name="price"
                    defaultValue={property_price}
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Buyer Name</span>
                  </label>
                  <input
                    name="bName"
                    defaultValue={user?.displayName}
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Buyer Email</span>
                  </label>
                  <input
                    name="bEmail"
                    defaultValue={user?.email}
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg">Date</span>
                  </label>
                  <input
                    className="input bg-white text-gray-600 p-2 input-bordered  rounded-r-lg"
                    name="date"
                    id="datepicker"
                    type="date"
                    required
                    placeholder="mm/dd/yyyy"
                  />
                </div>
                <div className="form-control grid">
                  <input
                    name="status"
                    value="pending"
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                    hidden
                  />
                </div>
                <div className="form-control grid">
                  <input
                    name="property_image"
                    value={property_image}
                    type="text"
                    placeholder=""
                    className="input input-bordered text-gray-600"
                    required
                    hidden
                  />
                </div>
              </div>
              <div className="form-control mt-6 flex items-center">
                <button className="btn w-60 text-white text-lg bg-gradient-to-r from-emerald-800 to-emerald-300">
                  Offer Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offered;
