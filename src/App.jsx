import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navigation from "./Components/Navigation/Navigation";
import HeroSection from "./Components/HeroSection/Homepage";
import "./index.css"
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import Navigation from "./Components/Navigation/Navigation";
const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>

        {/* <Route exact path="/" element={<Navigation />} /> */}
        <Route exact path="/" element={<HeroSection />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />

    </Router>
  )
}
export default App;