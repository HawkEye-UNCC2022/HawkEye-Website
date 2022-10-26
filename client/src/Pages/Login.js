import React from "react";
import FluidInput from "../components/Fluidinput";
import Logo from "../assets/hawkeye.png";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const style = {
        margin: "15px 0"
      };
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <img src={Logo} alt="logo"/>
            <div className="title">Login</div>
            <FluidInput type="text" label="name" id="name" style={style} />
            <FluidInput type="password" label="password" id="password" style={style} />
            <button class="login-button" onClick={ ()=> navigate('/Personal')} >Log In</button>
        </div>
    );
}

export default Login