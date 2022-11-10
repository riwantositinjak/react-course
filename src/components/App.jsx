//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";

const name = "Riwanto Sitinjak";
const year = new Date().getFullYear();

const App = () => {
  return (
    <div>
      <p>Created By {name}</p>
      <p>Copyright {year}</p>
    </div>
  );
};

export default App;
