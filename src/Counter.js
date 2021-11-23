import React, { useState, useEffect } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./counter.css";
const axios = require("axios");
const Counter = ({ increment, decrement, onValueChange, number }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .put(
        "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
        { counter1: number }
      )
      .then((res) => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [number]);

  return (
    <div className="counter">
      {isLoading && (
        <div className="Loader">
          <CircularProgress
            style={{ color: "black", width: "16px", height: "16px" }}
          />
          <p>Saving counter value</p>
        </div>
      )}
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          style={{
            color: "#B24242",
            width: "60px",
            borderColor: "#B24242",
            padding: "0",
            fontSize: "21px",
            textAlign: "center",
            border:"1.4px solid #B24242",
            margin: "0",
            borderTopLeftRadius:"8px",
            borderBottomLeftRadius:"8px",
          }}
          onClick={() => decrement()}
        >
          -
        </Button>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={number}
          type="number"
          onChange={(e) => onValueChange(e)}
          inputProps={{
            style: {
              color: "#B24242",
              backgroundColor: "#FBE8E8",
              borderColor: "#B24242",
              borderTopColor:"#B24242",
              borderTopStyle:"solid",
              borderTopWidth:"1.4px",
              borderBottomColor:"#B24242",
              borderBottomStyle:"solid",
              borderBottomWidth:"1.4px",
              borderRadius:"0px",
              borderLeftColor:"#B24242",
              borderLeftStyle:"solid",
              borderLeftWidth:"1px",
              borderRightColor:"#B24242",
              borderRightStyle:"solid",
              borderRightWidth:"1.4px",
              width: "58px",
              height: "54px",
              fontSize: "21px",
              textAlign: "center",
              padding: "0",
              fontWeight: "bold",
              margin: "0",
              fontFamily: "Avenir",
            },
          }}
        />
        <Button
          style={{
            color: "white",
            width: "60px",
            backgroundColor: "#B24242",
            borderColor: "#B24242",
            border:"1.4px solid #B24242",
            padding: "0",
            fontSize: "21px",
            textAlign: "center",
            margin: "0",
            borderBottomRightRadius:"8px",
            borderTopRightRadius:"8px",
          }}
          onClick={() => increment()}
        >
          +
        </Button>
      </ButtonGroup>{" "}
    </div>
  );
};

export default Counter;
