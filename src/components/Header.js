import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Billetómetro</h1>
      <p className="header__paragraph">
        Porque siempre quisiste saber cuánto miden y pesan tus pesos argentinos.
      </p>
    </header>
  );
}

export default Header;
