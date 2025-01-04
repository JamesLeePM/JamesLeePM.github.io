import React, { useState, useEffect } from "react";

function Footer() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        setQuote({ text: data.content, author: data.author });
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    }

    fetchQuote();
  }, []);

  return (
    <footer id="contact">
      <div className="footer-container row">
        <div className="quote">
          <p>"{quote.text}"</p>
          <p>- {quote.author}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
