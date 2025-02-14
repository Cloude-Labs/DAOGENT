import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>DAOGENT</h1>
      <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#features">Features</Link></li>
        <li><a href="https://github.com/Cloude-Labs/DAOGENT">GitHub</a></li>
      </ul>
    </nav>
  );
}
