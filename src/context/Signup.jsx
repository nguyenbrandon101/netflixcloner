import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore,setDoc,doc } from "firebase/firestore";
import {auth,db} from '../firebase';
const Signup = () => {

      const[email,setEmail] = React.useState("")
      const[password,setPassword] = React.useState("")
      const navigate = useNavigate()
      async function handleSubmit(event) {
        event.preventDefault()
        try {
          await createUserWithEmailAndPassword(auth, email, password)
          setDoc(doc(db,'users',email),{
            savedShows:[]
          })
          navigate('/')
        } catch (error) {
          console.log(error)
        }
      }
      return (
        <div>
          <div className='signUpPage'>
            <div className='blackBackground'>
                <form>              
                  <h1>Sign Up</h1>
                  <input className='emailInput' placeholder='Email or phone number' onChange={(event)=> setEmail(event.target.value)}></input>
                  <input className='passwordInput' type="password" placeholder='Password' onChange={(event)=> setPassword(event.target.value)}></input>
                  <button type='submit' onClick={handleSubmit} className='submitButton'>Sign Up</button>
                  <div className='remHelp'>
                    <p><input type="checkbox" className='remember'></input>Remember me</p>
                    <p className='help'>Need Help?</p>
                  </div>
                  <div className='subscr'>
                    <p className='already-sub'>Already subscribed to Netflix?</p>
                    <Link className= 'signLink'to ='Login'><p className='signButton'>Sign In</p></Link>
                  </div>
                </form>
              </div>
              <img src='https://user-images.githubusercontent.com/16425113/129554147-6ac7ba51-43e7-4c8e-ba77-e646a3ef6b12.jpg'></img>
          </div>
        </div>
    )
  }

export default Signup