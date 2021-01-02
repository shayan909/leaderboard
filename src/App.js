import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Student from "../src/component/Student";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="leadersboardHeading">Leadersboard</h1>
        <Student name="Shayan Siddiqui" university="Harvard" score={342}/>
        <Student name="Xi Xing lee" university="MIT" score={343} />
        <Student name="Sanjay Kumar" university="IIT" score={320} />
        <Student name="Ali Ahmed" university="NUST" score={350} />
      </div>
    );
  }
}

export default App;

