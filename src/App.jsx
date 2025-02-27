import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div style={{ backgroundColor: color }}>
        <header>
          <nav>
            <h1 onClick={() => setColor("Red")}>Red</h1>
            <h1 onClick={() => setColor("Yellow")}>Yellow</h1>
            <h1 onClick={() => setColor("Green")}>Green</h1>
            <h1 onClick={() => setColor("Orange")}>Orange</h1>
            <h1 onClick={() => setColor("Violet")}>Violet</h1>
            <h1 onClick={() => setColor("Blue")}>Blue</h1>
            <h1 onClick={() => setColor("white")}>white</h1>
            <h1 onClick={() => setColor("black")}>black</h1>
            <h1 onClick={() => setColor("white")}>white</h1>
          </nav>
        </header>
      </div>
    </>
  );
}

export default App;
