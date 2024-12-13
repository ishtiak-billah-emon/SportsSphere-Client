import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth"; 
import app from '../firebase/firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext(null);


const AuthProvider = () => {

  const [user, setUser] =useState(null);
  const 
  return (
    <div>
      
    </div>
  );
};

export default AuthProvider;