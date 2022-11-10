//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";

const fname = "Riwanto";
const lname = "Sitinjak";
const number = 7;

const App = () => {
  return (
    <div>
      <h1>
        Hello {fname} {lname}
      </h1>
      <p>my lucky number is {number}</p>
    </div>
  );
};

export default App;
