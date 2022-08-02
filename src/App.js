import { useState } from "react";
import "./App.css";

function App() {
  const [cals, setClas] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    // setCalc(calc + value);
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(<button key={i}> {i} </button>);
    }

    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {/* {result ? <span>(0)</span> : ""} {calc || "0"} */}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("=")}>+</button>
          <button onClick={() => updateCalc("/")}>-</button>

          <button>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
