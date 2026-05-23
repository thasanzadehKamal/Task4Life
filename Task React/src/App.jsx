import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Pagestart from "./components/Pagestart";
import Image from "./components/Image";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import SecondPage from "./components/SecondPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Pagestart />} />

        <Route path="/image" element={<Image />} />

        <Route path="/project" element={<Project />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </>
  );
}

export default App;
