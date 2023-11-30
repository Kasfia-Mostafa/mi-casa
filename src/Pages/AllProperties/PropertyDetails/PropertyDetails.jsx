import { RiVerifiedBadgeFill } from "react-icons/ri";
import Swal from "sweetalert2";
import Reviews from "../Reviews/Reviews";
import { AuthContext } from "../../../Layout/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useItemProperty from "../../../Hooks/useItemProperty";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

const PropertyDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const eachProperty = useLoaderData();
  const axiosSecure = useAxiosSecure()
  const [reviews, setReviews] = useState([]);
  const [,refetch]= useItemProperty()

  const {
    property_image,
    property_location,
    property_price,
    property_title,
    agent_name,
    agent_image,
    description,
  } = eachProperty || [];


    axiosSecure(`https://mi-casa-server.vercel.app/review`)
      .then((res) =>setReviews(res.data))

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const title = form.title.value;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const reviewPart = { review, title,email ,displayName,photoURL};

    axiosSecure.post("/review", reviewPart).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Review add",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const filteredReview = reviews.filter(
    (review) => review.title === eachProperty.property_title
  );

  const handleWishProperty = () => {
    if (user && user.email) {
      const cartItem = {
        email: user.email,
        property_image,
        property_location,
        property_price,
        property_title,
        agent_name,
        agent_image,
        description,
      }
      axiosSecure.post('/wishlist',cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Added to wishlist",
            showConfirmButton: false,
            timer: 1500,
          })
          refetch()
        }
      })

    } else {
      Swal.fire({
        title: "You are not login",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-white py-10 h-[150vh]">
      <div>
        <div className="flex justify-center items-center max-w-7xl mx-auto h-[60vh]">
          <div>
            <img className="w-[500px] h-full" src={property_image} alt="" />
          </div>
          <div className="mx-8 font-DM border-amber-300 border-l-8 px-4">
            <h2 className="text-6xl text-amber-600">{property_title}</h2>
            <p className="text-2xl text-gray-600">{property_location}</p>
            <p className="text-2xl text-amber-500">${property_price}</p>
            <div className="flex gap-3">
              <img className="w-5 rounded-md" src={agent_image} alt="" />
              <p>{agent_name}</p>
              <RiVerifiedBadgeFill className="text-green-500 text-xl" />
            </div>
            <p className="text-2xl text-gray-600">{description}</p>
            <button
              onClick={handleWishProperty}
              type="submit"
              className="text-white bg-gradient-to-r from-amber-600 to-amber-200 hover:bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Add to wish
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-10 font-DM">
          <form className="font-DM" onSubmit={handleReview}>
            <input
              type="text"
              name="title"
              id=""
              defaultValue={property_title}
              className="bg-white border-amber-400 border-2 text-center"
            />
            <div>
              <input hidden name="displayName" type="text" defaultValue={user.displayName}/>
              <input hidden name="photoURL" type="text" defaultValue={user.photoURL}/>
              <input hidden name="email" type="text" defaultValue={user.email}/>
              <textarea
                name="review"
                className="textarea mt-4 textarea-warning w-[700px]"
                placeholder="Review..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-2/3 mx-auto rounded-lg border-2 border-yellow-500 py-14 mt-28">
          <p className="text-center text-3xl  font-semibold font-DM text-amber-600 underline">
            Reviews
          </p>
          {filteredReview.map((eachReview) => (
            <Reviews key={eachReview._id} eachReview={eachReview}></Reviews>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
