import React from "react";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-500 flex justify-center items-center">
      <div className="bg-white w-100 md:w-[500px] rounded-3xl shadow-2xl p-8">
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-4xl">
            👤
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6 font-semibold">
          Sign in to Continue
        </p>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-indigo-600 focus:ring-indigo-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-indigo-600 focus:ring-indigo-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300 mt-5"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;