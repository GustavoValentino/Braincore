import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";

import Footer from "./Components/Footer";
import About from "./Pages/About";
import Index from "./Pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
