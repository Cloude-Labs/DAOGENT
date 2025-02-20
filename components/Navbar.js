import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when menu is open
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure reset on unmount
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <h1>DAOGENT</h1>

      <button 
        className="mobile-menu-btn" 
        onClick={toggleMenu} 
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="nav-menu"
        role="button"
      >
        ☰
      </button>

      <div role="navigation" aria-hidden={!isOpen}>
        <ul id="nav-menu" className={`menu ${isOpen ? "open" : ""}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#features">Features</Link></li>
          <li><a href="https://github.com/Cloude-Labs/DAOGENT" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><Link href="/login" className="login-btn">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}
