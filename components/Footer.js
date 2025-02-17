export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <p>© 2025 DAOGENT. All rights reserved.</p>
      <p>
        Follow us: 
        <a href="https://twitter.com/DAOGENT_AI">Twitter</a> | 
        <a href="#">Discord</a>
      </p>
      {/* New Privacy Policy link */}
      <p>
        <a href="/privacy-policy" className="privacy-policy-link">Privacy Policy</a>
      </p>
      <button onClick={scrollToTop} className="back-to-top">Back to Top</button>
    </footer>
  );
}
