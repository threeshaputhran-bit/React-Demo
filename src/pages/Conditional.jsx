import React from "react";

function Conditional() {
  // Conditional Rendering Using If Statement
  let name = "Dinesh";
  let isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome, Admin</h1>;
  } else {
    return <h1>Please try Again</h1>;
  }

  // Conditional Rendering Using Ternary Operator
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, Admin</h1>
      ) : (
        <h1>Please Login Again</h1>
      )}
    </div>
  );

  // Logical AND
  return (
    <div>
      {isLoggedIn && <h1>Welcome Admin</h1>}
    </div>
  );

  // Logical OR
  return (
    <div>
      <h1>{name || "Guest User"}</h1>
    </div>
  );
}

export default Conditional;