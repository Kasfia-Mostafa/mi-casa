import { useEffect, useState } from "react";
import UserReview from "./UserReview";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
// import { useLoaderData } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

// import useItemReview from "../../../../Hooks/useItemReview";
// import { useLoaderData } from "react-router-dom";

const UserReviews = () => {

  // const abc = useLoaderData()
  // console.log(abc)
// const [allUserReview] = useItemReview()
// console.log(allUserReview)


// const abc = useLoaderData()
// console.log(abc)
  const axiosSecure = useAxiosSecure()
  const [reviews, setReviews] = useState([]);
  const [allReview, setAllReview] = useState([]);
  
  // console.log(allReview)

  useEffect(() => {
    fetch(`http://localhost:5000/review`)
      .then((res) => res.json())
      .then((data) => setAllReview(data));
  });

  // useEffect(()=>{
  //  axiosSecure.get(`/property`)
  //   .then(res => setAllReview(res.data))
  // },[])
  
  // const filteredReview = allReview.filter(
  //   (review) => reviews.email === review.email
  // );
// console.log(filteredReview)

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
