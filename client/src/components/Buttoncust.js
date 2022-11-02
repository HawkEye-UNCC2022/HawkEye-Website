import React from "react";

class Button extends React.Component {
    render() {
      return (
        <div className={`button ${this.props.buttonClass}`} onClick={this.props.Button}>
          {this.props.buttonText}
        </div>
      );
    }
  }

export default Button;