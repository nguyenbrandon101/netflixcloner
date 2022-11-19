import React from "react";
import {Link , useNavigate} from 'react-router-dom'
import { UserAuth } from "./context/AuthContext";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    getAuth
  } from 'firebase/auth';
import Account from "./context/Account";
import { ProtectedRoute } from "./ProtectedRoute";
export default function Navibar() {
    const navigate = useNavigate()
    const auth = getAuth();
    const[isUser,setIsUser] = React.useState(false)
    const[currUser,setUser] = React.useState()


    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setIsUser(true)
        setUser(user)
      } else {
        console.log("no users")
    
      }
    })
    function handleLogout() {
        setUser("")
        setIsUser(false)
        signOut(auth)
        return (
            <a href="/"></a>
        )
    }


    return (
        <div className="navi">
            <Link className="link" to='/'>
            <h1 className='netflix-logo'>NETFLIX</h1>
            </Link>
            {!isUser ? ( 
                <div className="sign-buttons">
                <a href= "/Login">
                    <button className="signIn-but"> Sign In</button>
                </a>
                <a href="/Signup">
                    <button className="signUp-but"> Sign Up</button>
                </a>
                </div>
             ) : (
                <div className="sign-buttons">
                <a href="/Account">
                    <button className="signIn-but"> Account</button>
                </a>
                <button className="signUp-but" onClick={handleLogout}> Log Out</button>
                </div>
             )}        

        </div>
    )
}