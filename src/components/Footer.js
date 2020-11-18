import React from "react";
import "./Footer.css";

function Footer() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="footer">
      <div className="footer__text">
        Hecho por{" "}
        <a className="footer__link" href="https://valentincosta.com">
          Valentín Costa
        </a>
      </div>
      <span className="footer__button" title="Subir" onClick={handleClick}>
        <svg
          className="footer__button-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
        </svg>
      </span>
    </footer>
  );
}

export default Footer;
