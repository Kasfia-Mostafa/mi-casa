

const UserReview = ({eachReview}) => {

  const {review} = eachReview || []
  // console.log(review)
    return (
      <div>
        <div className="max-w-4xl mx-auto mt-5 font-DM">
        <hr />
        <p className="text-lg">- {review}</p>
      </div>
      </div>
    );
  };


export default UserReview;