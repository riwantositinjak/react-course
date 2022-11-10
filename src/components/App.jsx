import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();
  const [waktu, setWaktu] = useState(time);

  const handleClick = () => {
    const now = new Date().toLocaleTimeString();
    setWaktu(now);
  };
  setInterval(handleClick, 1000)
  return (
    <div className="container">
      <h1>{waktu}</h1>
      <button onClick={handleClick}>Get Time</button>
    </div>
  );
}

export default App;
