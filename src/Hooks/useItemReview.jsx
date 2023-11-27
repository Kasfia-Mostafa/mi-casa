import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";


const useItemReview = () => {

  const axiosSecure = useAxiosSecure();
  const { user} = useAuth()

  const { refetch,data: propertyReview = [] } = useQuery({                      
    queryKey: ["propertyReview", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/review?email=${user.email}`);
      return res.data;
    },
  });
  return [propertyReview,refetch];
};



export default useItemReview;