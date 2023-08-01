import { Link } from "react-router-dom";

function Signup() {
    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    };
    return (
        <div>
            <h1>Sign up Form</h1>
            <div>
                <div>
                    <h2>Create Account</h2>
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Email" />
                    <input
                        type="password" placeholder="Password"
                    />
                    <button>Sign Up</button>
                    <p>or</p>
                    <button onClick={googleAuth}>
                        <span>Sing up with Google</span>
                    </button>
                    <p>
                        Already Have Account ? <Link to="/login">Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;