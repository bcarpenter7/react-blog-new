import React from 'react'
import { GoogleLogout } from 'react-google-login';

const Logout = (props) => {
    const logout = () => {
        console.log('logout successful')
        props.response()
    }
    const clientId = "1014033198596-t0vusv7djdebbq7o88o3bvfen8kik8jl.apps.googleusercontent.com";
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logout}
            ></GoogleLogout>
        </div>
    )
}

export default Logout