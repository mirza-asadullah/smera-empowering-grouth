import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ELearning from "./pages/ELearning";
import "./index.css";
import Footer from "./components/Footer";
import { PopupProvider } from "./components/ComingSoonPopup";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <PopupProvider>
      <Router>
        <div className="app-root">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              {/* <Route path="/products" element={<Products />} /> */}
              {/* <Route path="/elearning" element={<ELearning />} /> */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </PopupProvider>
  );
}
