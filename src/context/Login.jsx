import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import {auth} from '../firebase';
import {
  signInWithEmailAndPassword
} from 'firebase/auth';
const Login = () => {
    const[email,setEmail] = React.useState("")
    const[password,setPassword] = React.useState("")
    const[wrong,setWrong] = React.useState(false)
    const navigate = useNavigate()
    async function handleSubmit(event) {
      event.preventDefault()
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setWrong(false)
        navigate('/')
      } catch (error) {
        console.log(error)
        setWrong(true)
      }
    }
    return (
    <div>
      <div>
        <div className='signInPage'>
          <div className='blackBackground'>
                           
                <h1>Sign In</h1>
                {wrong === true && <h2 className='wrong'>Wrong Email or Password</h2>}
                <input className='emailInput' placeholder='Email or phone number' onChange={(event)=> setEmail(event.target.value)}></input>
                <input className='passwordInput' placeholder='Password' type="password" onChange={(event)=> setPassword(event.target.value)}></input>
                <button type='submit' onClick={handleSubmit} className='submitButton'>Sign In</button>
                <div className='remHelp'>
                  <p><input type="checkbox" className='remember'></input>Remember me</p>
                  <p className='help'>Need Help?</p>
                </div>
                <div className='subscr-in'>
                  <p className='already-sub'>New to Netflix?</p>
                  <Link className= 'signLink'to ='Signup'><p className='signButton'>Sign Up</p></Link>
                </div>
              
            </div>
            <img src='https://user-images.githubusercontent.com/16425113/129554147-6ac7ba51-43e7-4c8e-ba77-e646a3ef6b12.jpg'></img>
        </div>
      </div>
    </div>
  )
}

export default Login