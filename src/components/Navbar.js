import React from 'react';
import '../components/app.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">RupeshG</div>
      <div className="nav-list">
        <ul>
          <li><a href="#About me">About me</a></li>
          <li><a href="#Resume">Resume</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact me">Contact me</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
