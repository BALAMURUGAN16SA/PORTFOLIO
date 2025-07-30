import React, { useState } from "react";
import "../styles/Navbar.css";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="navbar-brand">
        <img src={'/images/ICON.png'} alt="Logo" className="navbar-logo" />
        <span className="navbar-name fs-4 fw-bold ms-3">Balamurugan</span>
      </div>
      <button
        className={`navbar-toggler${open ? " open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`navbar-links${open ? " show" : ""}`}>
        <a href="#details" className="nav-link p-3">About</a>
        <a href="#technology" className="nav-link p-3">Technologies</a>
        <a href="#projects" className="nav-link p-3">Projects</a>
        <a href="#competitions" className="nav-link p-3">Competitions</a>
        <a href="#certifications" className="nav-link p-3">Certifications</a>
        <a href="#contact" className="nav-link p-3">Contact</a>
        <a href="https://drive.google.com/file/d/1Hfyvm1MOqVrb2v-VxZs7nzYwnfg_6FOV/view?usp=drivesdk" target="_blank" className="nav-link p-3">Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;
