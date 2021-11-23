import React from "react";

function CounterText({ number }) {
  return (
    <>
      <p
        className="counterText"
        style={{
          marginTop: "10px",
          marginLeft: "5px",
          fontSize: "12px",
          fontFamily: "Avenir",
        }}
      >
        Counter Value : {number}
      </p>
    </>
  );
}

export default CounterText;
