import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import '../styles/Login.css';
import { Link } from 'react-router-dom'

const DriverSignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup,error } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <form className="wrapper" onSubmit={handleSubmit}>
            <div className="login_box">
                <div className="login-header">
                    <span>Signup</span>
                </div>
                <div className="input_box">
                    <input type="text" className="input-field" required />
                    <label for="user" className="label">Username</label>
                    <i className="bx bx-user icon"></i>
                </div>
                <div className="input_box">
                    <input type="text" className="input-field" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    <label for="user" className="label">E-mail Address</label>
                    <i className="bx bx-user icon"></i>
                </div>
                <div className="input_box">
                    <input type="password" className="input-field" onChange={(e) => setPassword(e.target.value)} value={password} required />
                    <label for="pass" className="label">Password</label>
                    <i className="bx bx-lock-alt icon"></i>
                </div>
                <div className="input_box">
                    <input type="password" className="input-field" required />
                    <label for="pass" className="label">Confirm Password</label>
                    <i className="bx bx-lock-alt icon"></i>
                </div>
                <div className="input_box">
                    <input type="submit" className="input-submit" value="Signup" />
                </div>
                <div className="register">
                    <span>Already have an account? <Link to={'/login'}>Login</Link></span>
                </div>               
                {error && (<div className="error">{error}</div>)}
            </div>
        </form>
    );
}
 
export default DriverSignup;