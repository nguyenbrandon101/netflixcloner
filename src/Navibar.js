import React from "react";
import {Link} from 'react-router-dom'
import { UserAuth } from "./context/AuthContext";

import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid)
    // ...
  } else {
    // User is signed out
    // ...
  }
})

export default function Navibar() {
    console.log(UserAuth())
    return (
        <div className="navi">
            <Link className="link" to='/'>
            <h1 className='netflix-logo'>NETFLIX</h1>
            </Link>

            <div className="sign-buttons">
            <Link to= "/login">
                <button className="signIn-but"> Sign In</button>
            </Link>
            <Link to ='/signup'>
                <button className="signUp-but"> Sign Up</button>
            </Link>
            </div>
        </div>
    )
}