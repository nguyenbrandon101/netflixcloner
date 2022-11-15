import React from 'react'

const Login = () => {
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

    </div>
  )
}

export default Login