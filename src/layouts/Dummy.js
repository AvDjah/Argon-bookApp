import React from "react";
import { useState } from "react";
import { Redirect } from "react-router";

export default function Dummy(props) {
  const [goHome, setHome] = useState(false);
  if (goHome) {
    return <Redirect to="/"></Redirect>;
  }
  console.log(props.data);

  return (
    <div style={{ fontSize: "2rem", textAlign: "center", margin: "20px" }}>
      Reaching here means you logged in and an successful API call was made.
      Data received can be seen in console.
      <button
        style={{
          background: "blue",
          color: "white",
          margin: "10px",
          fontSize: "30px",
        }}
        onClick={(e) => {
          e.preventDefault();
          setHome(!goHome);
        }}
      >
        Go Back Home
      </button>
    </div>
  );
}
