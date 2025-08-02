// src/hooks/useAdmin.jsx
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth'; // আপনার AuthProvider থেকে user পাওয়ার জন্য
import useAxiosSecure from './useAxiosSecure'; // সুরক্ষিত API কল করার জন্য

const useAdmin = () => {
  const { user } = useAuth(); // আপনার AuthContext থেকে user নেওয়া
  const axiosSecure = useAxiosSecure(); // axios secure instance নেওয়া

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
      if (!user?.email) {
        return false;
      }
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.admin;
    },
    enabled: !!user?.email, // ব্যবহারকারী লগইন না থাকলে এটি চলবে না
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;