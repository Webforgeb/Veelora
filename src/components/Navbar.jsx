// components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Hôtel Lumière</h2>
      <ul>
        <li>Accueil</li>
        <li>Chambres</li>
        <li>Services</li>
        <li>Contact</li>
        <button className="btn">Connexion</button>
      </ul>
    </nav>
  );
}