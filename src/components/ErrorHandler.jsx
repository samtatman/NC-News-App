import React from "react";

class ErrorHandler extends React.Component {
  render() {
    const { msg, status } = this.props.error;
    console.log(msg, "hello");
    return (
      <div>
        <p>status: {status}</p>
        <p>{msg}</p>
      </div>
    );
  }
}

export default ErrorHandler;
