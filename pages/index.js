import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../styles/global.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DAOGENT - AI-Powered DAO Companion</title>
        <meta name="description" content="AI-powered governance for decentralized communities." />
      </Head>

      <Navbar />

      <header className="hero">
        <Image src="/banner.jpg" alt="DAOGENT Banner" width={1500} height={500} />
        <h1>DAOGENT</h1>
        <p>The AI-Powered Governance Assistant for DAOs</p>
      </header>

      <section className="about">
        <h2>What is DAOGENT?</h2>
        <p>DAOGENT is an AI-powered governance assistant that streamlines DAO operations, tracks discussions, and boosts participation.</p>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>📌 Automated Discussion Summaries</li>
          <li>📌 Proposal Tracking & Notifications</li>
          <li>📌 Sentiment Analysis</li>
          <li>📌 Participation Incentives</li>
          <li>📌 Multi-Platform Integration</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Get Involved</h2>
        <p>DAOGENT is open-source. Join us on GitHub and help shape the future of decentralized governance.</p>
        <a href="https://github.com/Cloude-Labs/DAOGENT" className="button">Join on GitHub</a>

        {/* New "Join the Community" button */}
        <a href="https://discord.gg/samplelink" className="button mt-4">Join the Community</a> {/* Added a new button */}
      </section>

      {/* New Contact Us Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          
          <button type="submit" className="button mt-4">Send Message</button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
