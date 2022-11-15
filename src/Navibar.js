import React from "react";
import {Link} from 'react-router-dom'
export default function Navibar() {
    return (
        <div className="navi">
            <Link className="link" to='/'>
            <h1 className='netflix-logo'>NETFLIX</h1>
            </Link>

            <div className="sign-buttons">
            <Link to='Login'>
                <button className="signIn-but"> Sign In</button>
            </Link>
            <Link to ='Signup'>
                <button className="signUp-but"> Sign Up</button>
            </Link>
            </div>
        </div>
    )
}