// components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <input type="text" placeholder="Nom" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button>Envoyer</button>
    </section>
  );
}