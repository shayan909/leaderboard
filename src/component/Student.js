import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./student.css";

class Student extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      success: false,
    };
  }

  componentDidMount() {
    this.setState({
      score: this.props.score,
    });
  }

  addScore() {
    this.setState(
      {
        score: this.state.score + 1,
      },
      () => {
        if (this.state.score >= 350) {
          this.setState({ success: true });
        }
      }
    );
  }

  minusScore() {
    this.setState(
      {
        score: this.state.score - 1,
      },
      () => {
        if (this.state.score < 350) {
          this.setState({ success: false });
        }
      }
    );
  }

  render() {
    const isSuccess = this.state.success;
    let text;
    if (this.state.score >= 350) {
      text = <span id="Success">Success</span>;
    } else {
      text = <span id="Fail">Fail</span>;
    }

    return (
      <div className="student">
        <div className="left">
          <h2 className="studentName">
            {this.props.name}
            <button className="addScorebtn" onClick={() => this.addScore()}>
              +
            </button>
            <button className="minusScorebtn" onClick={() => this.minusScore()}>
              -
            </button>
          </h2>
          <p className="universityName">
            {this.props.university} {text}
          </p>
        </div>
        <div className="right">
          <div class="score">{this.state.score}</div>
        </div>
      </div>
    );
  }
}

export default Student;
