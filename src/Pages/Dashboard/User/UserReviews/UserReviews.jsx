import { useState } from "react";
import UserReview from "./UserReview";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
const UserReviews = () => {
  const axiosSecure = useAxiosSecure();

  const [allReview, setAllReview] = useState([]);

  axiosSecure.get(`/review`).then((res) => setAllReview(res.data));

  return (
    <div className="font-DM">
      <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        Reviews
      </div>
      <div>
        {allReview.map((eachReview) => (
          <UserReview key={eachReview._id} eachReview={eachReview}></UserReview>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
