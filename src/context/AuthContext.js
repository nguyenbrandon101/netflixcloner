import React from "react";
import {auth} from "../firebase"
import {} from 'firebase/auth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";

const AuthContext = React.createContext()
export function AuthContextProvider({children}) {
    const [user,setUser] = React.useState({})
    function signUp(email,password) {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logOut() {
        return signOut(auth);
      }

    /** Checks once if a user is logged in or not */
    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      });

    return (
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return React.useContext(AuthContext)
}