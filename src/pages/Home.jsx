import React, { useEffect, useRef, useState } from "react";
import Layout from "./Layout";

function Home() {
  // Declaration Of UseState
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  // Syntax Of UseEffect
  // useEffect(() => {}, []);

  useEffect(() => {
    alert("Component Loaded");
  }, []);

  const focusInput = () => {
    console.log(inputRef);
    inputRef.current.focus();
  };

  let myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "sans-Serif",
  };

  return (
    <div>
      <Layout />

      <h4 style={{ color: "black", backgroundColor: "white" }}>
        Welcome To My page
      </h4>

      <p style={myStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
        voluptatum, atque eveniet necessitatibus totam aliquid repudiandae,
        nesciunt distinctio ullam veritatis iure architecto quod debitis
        exercitationem facere alias aut earum? In?
      </p>

      {/* Use State */}
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <br />
      <br />

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <div>
        <input ref={inputRef} />
        <button onClick={focusInput}>Focus</button>
      </div>

      <h1 className="text-3xl font-bold underline bg-red-400">
      Test Tailwind CSS
      </h1>
    </div>
  );
}

export default Home;