import React from 'react'
import { Navigate } from 'react-router-dom'
import {
    onAuthStateChanged,
    getAuth
  } from 'firebase/auth';
  import Navibar from '../Navibar';
function Account(props) {
  console.log(props.currUser)
  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}

export default Account