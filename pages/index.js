import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../styles/global.css';
import { useState, useCallback, useRef } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', botField: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '', botField: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  }, [formData, errors]);

  const handleCaptchaVerify = useCallback(() => {
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute('your-site-key', { action: 'submit' }).then((token) => {
        setCaptchaToken(token);
      });
    });
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { name: '', email: '', message: '', botField: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.botField) newErrors.botField = 'Spam detected';
    if (!captchaToken) newErrors.message = 'Captcha verification failed';

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    setSuccessMessage('Your message has been sent!');
    formRef.current?.reset();
    setTimeout(() => setSuccessMessage(''), 5000);
  }, [formData, captchaToken]);

  return (
    <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Head>
        <title>DAOGENT - AI-Powered DAO Companion</title>
        <meta name="description" content="AI-powered governance for decentralized communities." />
        <script src="https://www.google.com/recaptcha/api.js?render=your-site-key" async defer></script>
      </Head>

      <Navbar />

      <header className="hero dark:bg-gray-800 dark:border-b dark:border-gray-700 p-8">
        <Image src="/banner.jpg" alt="DAOGENT Banner" width={1500} height={500} priority />
        <h1 className="dark:text-gray-100">DAOGENT</h1>
        <p className="dark:text-gray-300">The AI-Powered Governance Assistant for DAOs</p>
      </header>

      <section className="contact dark:bg-gray-800 p-6 rounded-md">
        <h2 className="dark:text-gray-200">Contact Us</h2>
        <form ref={formRef} onSubmit={handleSubmit} role="form">
          <label htmlFor="name" aria-label="Enter your name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" onChange={handleInputChange} className="dark:bg-gray-900 dark:text-white" />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <label htmlFor="email" aria-label="Enter your email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" onChange={handleInputChange} className="dark:bg-gray-900 dark:text-white" />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <label htmlFor="message" aria-label="Enter your message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" onChange={handleInputChange} className="dark:bg-gray-900 dark:text-white"></textarea>
          {errors.message && <p className="text-red-500">{errors.message}</p>}

          {/* Honeypot Field for Spam Prevention */}
          <input type="text" name="botField" style={{ display: 'none' }} onChange={handleInputChange} />

          <button type="submit" onClick={handleCaptchaVerify} className="button mt-4 dark:bg-blue-600 dark:hover:bg-blue-700">Send Message</button>

          {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
        </form>
      </section>

      <Footer />
    </div>
  );
}
