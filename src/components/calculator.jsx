import React, { Component } from "react";

export class Calculator extends Component {
  state = {
    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    inputValue: "",
    firstValue: 0,
    secondValue: 0,
    btnOperators: ["+", "-", "*", "/"],
    operator: "",
  };
  addValue = (num) => {
    let temp = this.state.inputValue;
    temp += num;
    this.setState({ inputValue: temp });
    this.state.operator === ""
      ? this.setState({ firstValue: temp })
      : this.setState({ secondValue: temp });
  };
  changeOperator = (operator) => {
    this.setState({ operator: operator, inputValue: "" });
  };
  handleResult = () => {
    let temp;
    if (this.state.operator === "+") {
      temp = +this.state.firstValue + +this.state.secondValue;
    }
    if (this.state.operator === "*") {
      temp = +this.state.firstValue * +this.state.secondValue;
    }
    if (this.state.operator === "-") {
      temp = +this.state.firstValue - +this.state.secondValue;
    }
    if (this.state.operator === "/") {
      temp = +this.state.firstValue / +this.state.secondValue;
    }
    this.setState({ inputValue: temp });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <input type="text" value={this.state.inputValue} />
        {this.state.nums.map((num) => (
          <button
            onClick={() => {
              this.addValue(num);
            }}
          >
            {num}
          </button>
        ))}
        {this.state.btnOperators.map((oper) => (
          <button
            onClick={() => {
              this.changeOperator(oper);
            }}
          >
            {oper}
          </button>
        ))}
        <button
          onClick={() => {
            this.handleResult();
          }}
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
