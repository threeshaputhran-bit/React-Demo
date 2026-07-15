import React from "react";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <table>
              <th><Link to="/">Home</Link></th>
              <th><Link to="/blogs">Blogs</Link></th>
              <th><Link to="/contact">Contact</Link></th>
              <th><Link to="/login">Login</Link></th>
        </table>
      </nav>
    </>
  );
}

export default Layout;