import React from "react";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="scroll-top-button" title="Subir" onClick={handleClick}>
      <svg
        className="scroll-top-button__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
      </svg>
    </div>
  );
}

export default ScrollToTopButton;
