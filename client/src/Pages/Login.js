import React from "react";
import Logo from "../assets/hawkeye.png";
import { SetSSAN } from "../helper";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";


export const LoginForm = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        SetSSAN(user);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
        {success ? (navigate('/Personal')) : (
            <section className="login-container">
                <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <img src={Logo} alt="logo" />
                <div className="title">Login</div>
                <form onSubmit={handleSubmit}>
                    <input
                        className="login-input"
                        type="text"
                        id="username"
                        placeholder="User"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                    <input
                        className="login-input"
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button className="login-button">Sign In</button>
                </form>
            </section>
        )}
        </>
    )
}



export default LoginForm