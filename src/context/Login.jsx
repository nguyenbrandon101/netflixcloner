import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
    /**Reload screen to display NavBar */
    return (
    <div>
      <div>
        <div className='signInPage'>
          <div className='blackBackground'>
                           
                <h1>Sign In</h1>
                <input className='emailInput' placeholder='Email or phone number'></input>
                <input className='passwordInput' placeholder='Password'></input>
                <button type='submit' className='submitButton'>Sign In</button>
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