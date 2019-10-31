import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Click the button");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click the buton</button>
      </div>
    );
  }
}

export default ClassClick;
