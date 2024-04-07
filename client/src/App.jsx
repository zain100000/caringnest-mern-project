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
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/referral" Component={ReferralForm} />
        <Route path="/schedule" Component={Schedule} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
