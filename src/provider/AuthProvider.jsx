import React, { useState } from 'react';

import app from '../firebase/firebase.init'
const auth = getAuth(app);

const AuthProvider = () => {

  const [user, setUser] =useState(null);
  return (
    <div>
      
    </div>
  );
};

export default AuthProvider;