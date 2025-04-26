import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [mfaRequired, setMfaRequired] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdTokenResult();
        setCurrentUser({
          ...user,
          role: token.claims.role || 'user'
        });
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, mfaRequired, setMfaRequired }}>
      {children}
    </AuthContext.Provider>
  );
};