import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";


const UseAddProperty = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: AddProperty = [] } = useQuery({
    queryKey: ["newProperty", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/addProperty?email=${user.email}`);
      return res.data;
    },
  });
  return [AddProperty, refetch];
};

export default UseAddProperty;