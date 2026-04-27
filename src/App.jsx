import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Rooms from "./components/Rooms";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Services />
      <Rooms />
      <Contact />
    </div>
  );
}

export default App;