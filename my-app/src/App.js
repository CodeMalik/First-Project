import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
function Button({ number }) {
  return <h1 style={{ color: "red" }}> 2+1={2 + 1}</h1>;
  return (
    <button
      type="button"
      onClick={() => {
        alert(number);
      }}
    >
      {number}
    </button>
  );
}

function Malik1() {
  return;
}

function Calculator1() {
  return (
    <form name="cal">
      <input type={"text"} name="in"></input>
    </form>
  );
}

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <input type={"text"} value={count}></input>
      <p>You clicked {count} times</p>
      <button value={9} onClick={() => setCount((count = 9))}>
        9
      </button>
      <button value={8} onClick={() => setCount((count = 8))}>
        8
      </button>
    </div>
  );
}

function App() {
  let a = "A";

  return (
    <>
      {" "}
      <input
        type={"text"}
        className="b"
        style={{ bgcolor: "red", height: "100px" }}
      ></input>
      <button
        type="button"
        value={"9"}
        onClick={() => {
          "b.value+='9'";
        }}
      ></button>
    </>
  );
}

function Sum() {
  const [currentSum, setCurrentSum] = useState(0);
  const [clear, setClear] = useState(false);
  const [numbera, setNumbera] = useState(0);
  const [numberb, setNumberb] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);
  const [number6, setNumber6] = useState(0);
  const [number7, setNumber7] = useState(0);
  const [number8, setNumber8] = useState(0);
  const [number9, setNumber9] = useState(0);
  const [number0, setNumber0] = useState(0);
  const [numberx, setNumberx] = useState(0);
  const [numbery, setNumbery] = useState(0);
  return (
    <div className="App">
      <div className="app-Title">
        <input placeholder={currentSum} />
        Sum Numbers: [{currentSum}]
      </div>

      <input
        type={"text"}
        id="result"
        onChange={(event) => {
          setNumbera(parseFloat(event.target.value));
        }}
      />
      <input
        type={"text"}
        id="num"
        onChange={(event) => {
          setNumberb(parseFloat(event.target.value));
        }}
      />
      <br></br>
      <button
        onClick={() => {
          setCurrentSum(numbera + numberb);
        }}
      >
        Sum
      </button>
      <button onClick={()=>{
        setNumber1(1)
      }}>1</button>
    </div>
  );
}






function Sample1() {
  const [result, setReult]=useState(0) ;
  const [Operator, setOperator]=useState(0);
  const [input, setInput]=useState(0);
  return(
    <>
    <input type={"text"} />
    <br></br>
    <button>4</button>
    <button>2</button>
    <button>3</button>
    <br></br>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <br></br>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <br></br>
    <button>0</button>
    <button>+</button>
    <button>-</button>
    <button>*</button>
    <button>/</button>

    </>
  );
}





















export default Sample1;
