import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import useItemReview from "../../../../Hooks/useItemReview";

const AllReview = ({ eachReview }) => {
  const axiosSecure = useAxiosSecure()
  const [,refetch] = useItemReview()

  const { review, email, displayName, photoURL,_id } = eachReview || [];

  const handleDelete = () => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/review/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire("Deleted!", "Review has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body flex">
       <div className="flex gap-28">
       <div>
            <div className="flex gap-5">
              <img className="w-10 rounded-full" src={photoURL} alt="" />
              <p>{displayName}</p>
            </div>
            <p>{email}</p>
            </div>
          <div className="card-actions justify-end">
            <button onClick={handleDelete} className="btn btn-square btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
       </div>
          <p className="text-gray-500">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default AllReview;
