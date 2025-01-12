import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../styles/global.css';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    console.log("Form submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: '', email: '', message: '' });
  };

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

      <section className="contact dark:bg-gray-800 p-6 rounded-md">
        <h2 className="dark:text-gray-200">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="dark:bg-gray-900 dark:text-white" />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} className="dark:bg-gray-900 dark:text-white" />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} className="dark:bg-gray-900 dark:text-white"></textarea>
          {errors.message && <p className="text-red-500">{errors.message}</p>}

          <button type="submit" className="button mt-4 dark:bg-blue-600 dark:hover:bg-blue-700">Send Message</button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
