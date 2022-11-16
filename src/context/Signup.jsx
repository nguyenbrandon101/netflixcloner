import React from 'react'
import Navibar from '../Navibar'
import {Link} from 'react-router-dom'
const Signup = () => {
      /**Reload screen to display NavBar */
      (function()
      {
        if( window.localStorage )
        {
          if( !localStorage.getItem('firstLoad') )
          {
            localStorage['firstLoad'] = true;
            window.location.reload();
          }  
          else
            localStorage.removeItem('firstLoad');
        }
      })();

    return (
      <div>
        <div className='signUpPage'>
          <div className='blackBackground'>
              <form>              
                <h1>Sign Up</h1>
                <input className='emailInput' placeholder='Email or phone number'></input>
                <input className='passwordInput' placeholder='Password'></input>
                <button type='submit' className='submitButton'>Sign Up</button>
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