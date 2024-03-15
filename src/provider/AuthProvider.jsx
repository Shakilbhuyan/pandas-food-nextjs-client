"use client"
import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '@/firebase/firebase.config';


export const Authcontext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    // Signup
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // google sign in
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
// Signin
      const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
      };

      const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
      };

      const updateUserProfile = (name, photo)=>{
      return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
      }




    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
    }
    return (
        <Authcontext.Provider  value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;