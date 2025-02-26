export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="dark:bg-gray-900 dark:text-white p-4 text-center">
      <p>© 2025 DAOGENT. All rights reserved.</p>
      <p>
        Follow us:{" "}
        <a 
          href="https://twitter.com/DAOGENT_AI" 
          className="hover:underline" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
        |{" "}
        <a 
          href="#" 
          className="hover:underline" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Discord
        </a>
      </p>
      
      {/* Privacy Policy & Terms of Service Links */}
      <p>
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> |{" "}
        <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
      </p>
      
      <button 
        onClick={scrollToTop} 
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        aria-label="Scroll to top"
      >
        Back to Top ⬆️
      </button>
    </footer>
  );
}
