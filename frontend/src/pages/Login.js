import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import '../styles/Login.css';
import { Link } from "react-router-dom";

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error,login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div className="wrapper">
            
            <form className="login_box" onSubmit={handleSubmit}>
                <div className="login-header">
                    <span>Login</span>
                </div>
                
                <div className="input_box">
                    <input type="text" id="user" className="input-field" required onChange={(e) => {setEmail(e.target.value)}} value={email}/>
                    <label for="user" className="label">Username</label>
                    <i className="bx bx-user icon"></i>
                </div>

                <div className="input_box">
                    <input type="password" id="pass" className="input-field" required onChange={(e) => {setPassword(e.target.value)}} value={password}/>
                    <label for="pass" className="label">Password</label>
                    <i className="bx bx-lock-alt icon"></i>
                </div>

                <div className="remember-forgot">
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label for="remember">   Remember me</label>
                    </div>
                    <div className="forgot">
                        <Link to={"/signup"}>Forgot password?</Link>
                    </div>
                </div>

                <div className="input_box" type="submit">
                    <input type="submit" className="input-submit" value="Login" />
                </div>

                <div className="register">
                    <span>Don't have an account? <Link to={'/signup'}>Register</Link></span>
                </div>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
}
 
export default Login;