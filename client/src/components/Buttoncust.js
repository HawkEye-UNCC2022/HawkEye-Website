import React from "react";
import { useNavigate } from "react-router-dom";

let navigate = useNavigate();
const routeChange = () =>{ 
  let path = `public/dashboard.html`; 
  navigate(path);
}

class Button extends React.Component {
    render() {
      return (
        <div className={`button ${this.props.buttonClass}`} onClick={routeChange}>
          {this.props.buttonText}
        </div>
      );
    }
  }

export default Button;