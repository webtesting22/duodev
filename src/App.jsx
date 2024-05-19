import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navigation from "./Components/Navigation/Navigation";
import HeroSection from "./Components/HeroSection/Homepage";
import "./index.css"
import AboutUs from "./Components/AboutUs/AboutUs";
const App = () => {
  return (
    <Router>

      <Routes>
        {/* <Route exact path="/" element={<Navigation />} /> */}
        <Route exact path="/" element={<HeroSection />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
      </Routes>

    </Router>
  )
}
export default App;