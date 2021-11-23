import "./App.css";
import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import CounterText from "./CounterText";
const axios = require("axios");

function App() {
  console.log(`HIIII ${process.env.REACT_APP_MAX_VALUE}`);
  const [number, setNumber] = useState(0);
  const getMaxValue = () => {
    if (process.env.REACT_APP_MAX_VALUE !== undefined) {
      return parseInt(process.env.REACT_APP_MAX_VALUE);
    } else {
      return parseInt(1000);
    }
  };

  function increment() {
    if (number < getMaxValue()) setNumber(parseInt(number) + 1);
  }
  function decrement() {
    setNumber(number - 1);
  }
  function onValueChange(e) {
    if (e.target.value <= getMaxValue()) setNumber(e.target.value);
  }
  useEffect(() => {
    axios
      .get(
        "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json"
      )
      .then((res) => {
        if (res.data == null) setNumber(1);
        else setNumber(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="App">
      <div className="Window">
        <Counter
          number={number}
          increment={increment}
          decrement={decrement}
          onValueChange={onValueChange}
        />
        <CounterText number={number} />
      </div>
    </div>
  );
}

export default App;
