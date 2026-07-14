import React from "react";

function Button() {

  const handleSubmit = () => {
    alert("Hello");
  };

  const handleClick = (x) => {
    alert(x);
  };

  return (
    <div>
      <button onClick={handleSubmit}>Click</button>

      <br />
      <br />

      <button onClick={() => handleClick("Button Is Clicked")}>
        Submit
      </button>
    </div>
  );
}

export default Button;