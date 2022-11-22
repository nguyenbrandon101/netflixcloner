import React from 'react'
import { getFirestore } from "firebase/firestore";
import Savedshows from './Savedshows';
import {
  getAuth,
  onAuthStateChanged
} from 'firebase/auth';
  import Navibar from './Navibar';
export default function Account() {
  const[currEmail,setCurrEmail] = React.useState()
  const auth = getAuth();

  onAuthStateChanged(auth, async(user) => {
    if (user) {
        setCurrEmail(user.email)
    } 
  })
  return (
    <div>
      <div className = "accountBackground">
            <img src='https://user-images.githubusercontent.com/16425113/129554147-6ac7ba51-43e7-4c8e-ba77-e646a3ef6b12.jpg'></img>
            <h1>My Shows</h1>
      </div>
      <div className='displayFav'>
          <h1 className='favTitle'> My Shows</h1>
          <Savedshows
            currEmail = "test2@test.com"
          >
          </Savedshows>
      </div>
    </div>
  )
}