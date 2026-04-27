// components/Services.js
import React from "react";
import { FaWifi, FaSpa, FaUtensils, FaSwimmingPool, FaCar, FaConciergeBell } from "react-icons/fa";

export default function Services() {
  const services = [
    { name: "Wi-Fi", icon: <FaWifi /> },
    { name: "Spa", icon: <FaSpa /> },
    { name: "Restaurant", icon: <FaUtensils /> },
    { name: "Piscine", icon: <FaSwimmingPool /> },
    { name: "Parking", icon: <FaCar /> },
    { name: "Room Service", icon: <FaConciergeBell /> },
  ];

  return (
    <section className="services">
      <h2>Nos Services</h2>

      <div className="grid">
        {services.map((s, i) => (
          <div key={i} className="card">
            <div className="icon">{s.icon}</div>
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}