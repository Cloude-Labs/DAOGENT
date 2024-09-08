import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../styles/global.css';

export default function Home() {
  return (
    <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Head>
        <title>DAOGENT - AI-Powered DAO Companion</title>
        <meta name="description" content="AI-powered governance for decentralized communities." />
      </Head>

      <Navbar />

      <header className="hero dark:bg-gray-800 dark:border-b dark:border-gray-700 p-8">
        <Image src="/banner.jpg" alt="DAOGENT Banner" width={1500} height={500} priority />
        <h1 className="dark:text-gray-100">DAOGENT</h1>
        <p className="dark:text-gray-300">The AI-Powered Governance Assistant for DAOs</p>
      </header>

      <section className="about dark:bg-gray-800 p-6 rounded-md">
        <h2 className="dark:text-gray-200">What is DAOGENT?</h2>
        <p className="dark:text-gray-300">DAOGENT is an AI-powered governance assistant that streamlines DAO operations, tracks discussions, and boosts participation.</p>
      </section>

      <section className="features dark:bg-gray-800 p-6 rounded-md">
        <h2 className="dark:text-gray-200">Key Features</h2>
        <ul>
          <li className="dark:text-gray-300">📌 Automated Discussion Summaries</li>
          <li className="dark:text-gray-300">📌 Proposal Tracking & Notifications</li>
          <li className="dark:text-gray-300">📌 Sentiment Analysis</li>
          <li className="dark:text-gray-300">📌 Participation Incentives</li>
          <li className="dark:text-gray-300">📌 Multi-Platform Integration</li>
        </ul>
      </section>

      <section className="cta dark:bg-gray-900 p-6 rounded-md text-center">
        <h2 className="dark:text-gray-200">Get Involved</h2>
        <p className="dark:text-gray-300">DAOGENT is open-source. Join us on GitHub and help shape the future of decentralized governance.</p>
        <a href="https://github.com/Cloude-Labs/DAOGENT" className="button dark:bg-blue-600 dark:hover:bg-blue-700">Join on GitHub</a>
        <a href="https://discord.gg/samplelink" className="button mt-4 dark:bg-green-600 dark:hover:bg-green-700">Join the Community</a>
      </section>

      <Footer />
    </div>
  );
}
