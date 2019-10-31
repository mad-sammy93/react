import React from "react";
import "./App.css";

import Welcome from "./components/Welcome";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">
      <NameList />
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}

      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}

      {/* <Greet name="Bruce" heroName="Batman">
        <p>This ia a child prop</p>
      </Greet>
      <Greet name="Clark " heroName="Superman">
        <button>Add-on</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" /> */}

      {/* <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark " heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" /> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
