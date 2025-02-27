import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="navbar dark:bg-gray-900 dark:text-white">
      <h1>DAOGENT</h1>

      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode} 
          className="dark-mode-btn" 
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Mobile Menu Button */}
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
      </div>

      {/* Navigation Menu */}
      <div role="navigation" aria-hidden={!isOpen}>
        <ul 
          id="nav-menu" 
          className={`menu ${isOpen ? "open" : ""}`} 
          tabIndex={isOpen ? 0 : -1}
        >
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#features">Features</Link></li>
          <li><Link href="#faq">FAQ</Link></li> {/* Added FAQ link */}
          <li>
            <a href="https://github.com/Cloude-Labs/DAOGENT" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li><Link href="/login" className="login-btn">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}
