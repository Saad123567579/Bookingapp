import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <span className="logo">Logo</span>
        <div className="credential">
          <button className="auth">Signup</button>
          <button className="auth">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
