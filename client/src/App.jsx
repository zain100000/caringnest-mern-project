import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/navigation/Header";
import Home from "./components/screens/Home";
import About from "./components/screens/About";
import Services from "./components/screens/Services";
import Gallery from "./components/screens/Gallery";
import ReferralForm from "./components/screens/Forms/ReferralForm";
import Schedule from "./components/screens/Forms/Schedule";
import Contact from "./components/screens/Forms/Contact";
import Footer from "./components/navigation/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/referral" element={<ReferralForm />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
