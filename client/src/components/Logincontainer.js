import React from "react";
import FluidInput from "./Fluidinput";
import Button from "./Buttoncust";


class LoginContainer extends React.Component {
    render() {
      
      const style = {
        margin: "15px 0"
      };
      return (
        <div className="login-container">
          <div className="title">
           Login
          </div>
          <FluidInput type="text" label="name" id="name" style={style} />
          <FluidInput type="password" label="password" id="password" style={style} />
          <Button buttonText="log in" buttonClass="login-button" />
        </div>
      );
    }
  }

export default LoginContainer;