import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    //short circuit approach
    return this.state.isLoggedIn && <div>Welcome Sammy</div>;

    //ternary approach
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Sammy</div>
    // ) : (
    //   <div>Welcome User</div>
    // );

    //second approach
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Sammy</div>;
    // } else {
    //   message = <div>Welcome User</div>;
    // }
    // return <div>{message}</div>;

    //if else approach
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Sammy</div>;
    // } else {
    //   return <div>Welcome User</div>;
    // }
  }
}

export default UserGreeting;
