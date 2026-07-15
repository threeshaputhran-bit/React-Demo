import React from "react";

function Lists() {
  let arr = ["Ford", "BMW", "Audi", "TATA", "SUZUKI"];

  return (
    <div>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lists;