import React from 'react'
import { Navigate } from 'react-router-dom'
import {
    onAuthStateChanged,
    getAuth
  } from 'firebase/auth';
export const ProtectedRoute = (props) => {
    console.log(props.isUser)
    if (props.isUser == false) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        return (
            <a href='/'></a>
        )
    }
}
