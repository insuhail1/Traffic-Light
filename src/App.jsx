import React, { useState, useEffect } from "react";
import "./App.css";

const lights = [
  { color: "green", duration: 3000 },
  { color: "yellow", duration: 500 },
  { color: "red", duration: 4000 },
];

export default function TrafficLight() {
  const [activeLight, setActiveLight] = useState(0);

  function light(c) {
    return (
      <div
        style={{
          background: c || "grey",
          borderRadius: "9999px",
          width: 100,
          height: 100,
        }}
      />
    );
  }

  useEffect(() => {
    let timeout = setInterval(() => {
      setActiveLight((prev) => (prev + 1) % lights.length);
    }, lights[activeLight].duration);
    return () => clearInterval(timeout);
  }, [activeLight]);

  return (
    <div className="app">
      <div
        style={{
          background: "black",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column-reverse",
          gap: 16,
          width: "fit-content",
          padding: 16,
        }}
      >
        {lights.map((l) => (
          <React.Fragment>
            {light(lights[activeLight].color === l.color ? l.color : "")}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
