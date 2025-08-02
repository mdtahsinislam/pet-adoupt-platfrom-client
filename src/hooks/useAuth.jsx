
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider'; // আপনার AuthProvider-এর path

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;