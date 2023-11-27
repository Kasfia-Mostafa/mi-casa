import useItemReview from "../../../../Hooks/useItemReview";
import AllReview from "./AllReview";


const AllReviews = () => {

  const [allUserReview] = useItemReview()

  return (
    <div className="font-DM max-h-full">
      <div className="m-3 text-6xl text-emerald-700 font-semibold ">
        All Reviews
      </div>
      <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto my-20">
      {allUserReview.map((eachReview) => (
          <AllReview key={eachReview._id} eachReview={eachReview}></AllReview>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;