import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
//import app from '../firebase/firebase.config';
import { useContext } from 'react';
import app from '../firebase/firebase.init';
export const AuthContext = createContext();
const auth = getAuth(app);








const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const useAuthContext = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Email Registration
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // GitHub Login
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    register,
    login,
    logout,
    googleLogin,
    githubLogin

  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
