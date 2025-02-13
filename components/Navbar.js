import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>DAOGENT</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#features">Features</Link></li>
        <li><a href="https://github.com/Cloude-Labs/DAOGENT">GitHub</a></li>
      </ul>
    </nav>
  );
}
