import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <h1>DAOGENT</h1>
      <button 
        className="mobile-menu-btn" 
        onClick={toggleMenu} 
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        role="button"
      >
        ☰
      </button>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#features">Features</Link></li>
        <li><a href="https://github.com/Cloude-Labs/DAOGENT">GitHub</a></li>
        {/* New Login button */}
        <li><Link href="/login" className="login-btn">Login</Link></li> {/* Added Login button */}
      </ul>
    </nav>
  );
}
