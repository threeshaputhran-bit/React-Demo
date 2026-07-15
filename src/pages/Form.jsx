import React from "react";

var uname = "";

function Form() {

  const handleChange = (event) => {
    uname = event.target.value;
    // console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("uname", uname);
    console.log("Session Data", uname);
  };

  return (
    <div>
      <h3>Login Form</h3>

      <form>
        <label>Enter Your UserName</label>
        <br /><br />

        <input
          type="text"
          name="uname"
          onChange={handleChange}
        />
        <br /><br />

        <label>Enter Your Password</label>
        <br /><br />

        <input
          type="password"
          name="password"
        />
        <br /><br />

        <button
          type="submit"
          value="Login"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Form;