// // // // src/context/AuthContext.jsx
// // // import React, { createContext, useEffect, useState, useContext } from 'react';
// // // import { 
// // //   getAuth, 
// // //   createUserWithEmailAndPassword, 
// // //   signInWithEmailAndPassword, 
// // //   signOut, 
// // //   onAuthStateChanged, 
// // //   GoogleAuthProvider, 
// // //   GithubAuthProvider, 
// // //   signInWithPopup 
// // // } from 'firebase/auth';
// // // import app from '../firebase/firebase.init';

// // // // Create context
// // // export const AuthContext = createContext();

// // // // Auth provider setup
// // // const auth = getAuth(app);
// // // const googleProvider = new GoogleAuthProvider();
// // // const githubProvider = new GithubAuthProvider();

// // // // Custom hook for using auth context
// // // export const useAuth = () => {
// // //   return useContext(AuthContext);
// // // };

// // // // AuthProvider component
// // // export const AuthProvider = ({ children }) => {
// // //   const [user, setUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   // Auth methods
// // //   const register = (email, password) => {
// // //     return createUserWithEmailAndPassword(auth, email, password);
// // //   };

// // //   const login = (email, password) => {
// // //     return signInWithEmailAndPassword(auth, email, password);
// // //   };

// // //   const googleLogin = () => {
// // //     return signInWithPopup(auth, googleProvider);
// // //   };

// // //   const githubLogin = () => {
// // //     return signInWithPopup(auth, githubProvider);
// // //   };

// // //   const logout = () => {
// // //     return signOut(auth);
// // //   };

// // //   // Auth state observer
// // //   useEffect(() => {
// // //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// // //       setUser(currentUser);
// // //       setLoading(false);
// // //     });
// // //     return () => unsubscribe();
// // //   }, []);

// // //   // Context value
// // //   const value = {
// // //     user,
// // //     loading,
// // //     register,
// // //     login,
// // //     logout,
// // //     googleLogin,
// // //     githubLogin
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={value}>
// // //       {!loading && children}
// // //     </AuthContext.Provider>
// // //   );
// // // };

// // // // Default export for the provider
// // // export default AuthProvider;

// // import React, { createContext, useEffect, useState, useContext } from 'react';
// // import { 
// //   getAuth, 
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   signOut,
// //   onAuthStateChanged,
// //   GoogleAuthProvider,
// //   GithubAuthProvider,
// //   signInWithPopup
// // } from 'firebase/auth';
// // import app from '../firebase/firebase.init';

// // export const AuthContext = createContext();

// // const auth = getAuth(app);
// // const googleProvider = new GoogleAuthProvider();
// // const githubProvider = new GithubAuthProvider();

// // export const useAuth = () => {
// //   const context = useContext(AuthContext);
// //   if (!context) {
// //     throw new Error('useAuth must be used within an AuthProvider');
// //   }
// //   return context;
// // };

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   const register = (email, password) => {
// //     return createUserWithEmailAndPassword(auth, email, password);
// //   };

// //   const login = (email, password) => {
// //     return signInWithEmailAndPassword(auth, email, password);
// //   };

// //   const googleLogin = () => {
// //     return signInWithPopup(auth, googleProvider);
// //   };

// //   const githubLogin = () => {
// //     return signInWithPopup(auth, githubProvider);
// //   };

// //   const logout = () => {
// //     return signOut(auth);
// //   };

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //       setLoading(false);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   const value = {
// //     user,
// //     loading,
// //     register,
// //     login,
// //     logout,
// //     googleLogin,
// //     githubLogin
// //   };

// //   return (
// //     <AuthContext.Provider value={value}>
// //       {!loading && children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export default AuthProvider;

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import app from '../firebase/firebase.init';

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const auth = getAuth(app);
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     loading
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }


// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import app from '../firebase/firebase.init';

// // Create context with default value
// const AuthContext = createContext({
//   currentUser: null,
//   loading: true
// });

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const auth = getAuth(app);
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import app from '../firebase/firebase.init';

// // Create context with default value
// const AuthContext = createContext({
//   currentUser: null,
//   loading: true
// });

// // Either keep this as useAuth
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// // OR rename to useAuthContext
// export const useAuthContext = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuthContext must be used within an AuthProvider');
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const auth = getAuth(app);
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;