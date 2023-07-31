import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script'
import axios from 'axios'

const Login = (props) => {
    const clientId = "1014033198596-t0vusv7djdebbq7o88o3bvfen8kik8jl.apps.googleusercontent.com";
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId })
        })
    }, [])

    const responseGoogle = (response) => {
        console.log(response)
        axios.post('http://localhost:3001',
            { idToken: response.tokenId }
        ).then(response => {
            console.log(response)
            props.response(response)
        })
            .catch(err => { console.log(err) })
    }
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login