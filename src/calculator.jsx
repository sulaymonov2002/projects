import { Component } from "react";
import Terminal from "./components/terminal";


class Calculator extends Component {
  state = {
    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    terminalValue: "",
    firstValue: null,
    secondValue: null,

    btnOperators: [
      { oper: "+", isActive: false },
      { oper: "-", isActive: false },
      { oper: "*", isActive: false },
      { oper: "/", isActive: false },
    ],

    operator: "",

    types: ["AC", "+/-", "%"],
  };
  render() {
    return (
      <>
        <div>
          <Terminal value={this.state.terminalValue} />
          <div className="btns">
            <div className="numbers">
              <div className="types"></div>
              <div className="num"></div>
            </div>
            <div className="operators"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
