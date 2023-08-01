import { Link } from "react-router-dom";

function Login() {
    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL} / auth / login / success`,
            "_self"
        );
    };
    return (
        <div>
            <h1 >Log in Form</h1>
            <div>
                <div>
                    <button onClick={googleAuth}>
                        <span>Sing in with Google</span>
                    </button>
                    <p >
                        New Here ? <Link to="/signup">Sing Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;