import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <header>
        <nav>
          {[
            "Red",
            "Yellow",
            "Green",
            "Orange",
            "Violet",
            "Blue",
            "White",
            "Black",
          ].map((col) => (
            <h1
              key={col}
              style={{
                backgroundColor: col.toLowerCase(),
                cursor: "pointer",
                padding: "10px",
                margin: "5px",
                display: "inline-block",
                color: col === "Black" ? "white" : "black",
              }}
              onClick={() => setColor(col.toLowerCase())}
            >
              {col}
            </h1>
          ))}
        </nav>
      </header>
    </div>
  );
}

export default App;
