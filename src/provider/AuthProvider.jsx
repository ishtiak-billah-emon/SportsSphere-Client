import React, { Children, createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"; 
import app from '../firebase/firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

  const [user, setUser] =useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password);
  }
  const userInfo = {
    createUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;