import React from "react";

export function About() {
  const title = "About";
  const p1 = "How to Increase Text Size";
  const p2 = "How to Decrease the Text Size";
  return (
    <div className="flex-container">
      <div>
        <h1>{title}</h1>
        <br></br>
      </div>
      <h3>{p1}</h3>
      <ul>
        <li>Press 'CTRL +'</li>
        <li>Zoom in on your keypad or mouse</li>
      </ul>

      <h3>{p2}</h3>
      <ul>
        <li>Press 'CTRL -'</li>
        <li>Zoom out on your keypad or mouse</li>
      </ul>
    </div>
  );
}
