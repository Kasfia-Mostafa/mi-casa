import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";

const useNewAddProperty = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: newPropertyItem = [] } = useQuery({
    queryKey: ["newPropertyItem", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/addProperty?email=${user.email}`);
      return res.data;
    },
  });
  return [newPropertyItem, refetch];
};

export default useNewAddProperty;

