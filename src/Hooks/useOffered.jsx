import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";

const useOffered = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: propertyOffer = [] } = useQuery({
    queryKey: ["propertyOffer", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/offered?email=${user.email}`);
      return res.data;
    },
  });
  return [propertyOffer, refetch];
};




export default useOffered;